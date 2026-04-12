import type { Hash } from 'viem'
import { getPrisma } from '@/server/db'
import { DEPOSIT, TOKENS } from '@/lib/constants'

function requireEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`${name}_missing`)
  return v
}

async function basescanGet(params: Record<string, string>) {
  const apiKey = requireEnv('BASESCAN_API_KEY')
  // Etherscan/Basescan API V2 uses a unified host.
  // For Base Sepolia (chainid 84532) we call https://api.etherscan.io/v2/api
  const url = new URL('https://api.etherscan.io/v2/api')
  // V2 requires chainid.
  url.searchParams.set('chainid', '84532')
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v)
  url.searchParams.set('apikey', apiKey)

  const res = await fetch(url.toString())
  const data = await res.json().catch(() => null)
  if (!res.ok) throw new Error(`basescan_http_${res.status}`)
  if (!data) throw new Error('basescan_bad_json')
  if (data.status === '0') throw new Error(data.result || 'basescan_error')
  return data.result
}

export async function upsertDepositByTxHashBasescan(txHash: Hash) {
  const prisma = getPrisma()

  // 1) get tx
  const tx = await basescanGet({ module: 'proxy', action: 'eth_getTransactionByHash', txhash: txHash })
  if (!tx || !tx.hash) throw new Error('tx_not_found')

  // 2) get receipt
  const receipt = await basescanGet({
    module: 'proxy',
    action: 'eth_getTransactionReceipt',
    txhash: txHash,
  })
  if (!receipt || !receipt.status) throw new Error('receipt_not_found')

  // 3) latest block
  const latestHex = await basescanGet({ module: 'proxy', action: 'eth_blockNumber' })
  const latest = Number(BigInt(latestHex))

  const to = String(tx.to || '').toLowerCase()
  const token = TOKENS.baseSepolia.USDC.toLowerCase()
  if (to !== token) throw new Error('not_usdc_tx')

  const blockNumberHex = tx.blockNumber
  const blockNumber = blockNumberHex ? Number(BigInt(blockNumberHex)) : null

  // input decoding for ERC20 transfer
  const input: string = tx.input || '0x'
  // transfer(address,uint256) selector = a9059cbb
  if (!input.startsWith('0xa9059cbb')) throw new Error('not_transfer')

  const toPadded = '0x' + input.slice(10 + 24, 10 + 64) // last 40 chars of first arg
  const valueHex = '0x' + input.slice(10 + 64, 10 + 64 + 64)

  const toAddress = toPadded.toLowerCase()
  const value = BigInt(valueHex)
  const amount = Number(value) / 1e6

  const confirmations = blockNumber ? latest - blockNumber + 1 : 0
  const requiredConf = DEPOSIT.requiredConfirmations

  const status = receipt.status === '0x1' && confirmations >= requiredConf ? 'CONFIRMED' : 'PENDING'

  const user = await prisma.user.findUnique({ where: { walletAddress: toAddress } })

  const upserted = await prisma.depositOrder.upsert({
    where: { txHash: txHash as any },
    update: {
      chain: 'BASE',
      coin: 'USDC',
      toAddress,
      fromAddress: String(tx.from || '').toLowerCase(),
      blockNumber,
      amount: amount.toFixed(6),
      confirmations,
      requiredConf,
      status,
      confirmedAt: status === 'CONFIRMED' ? new Date() : null,
      userId: user?.id ?? null,
    },
    create: {
      orderNo: `DP${Date.now()}`,
      chain: 'BASE',
      coin: 'USDC',
      toAddress,
      fromAddress: String(tx.from || '').toLowerCase(),
      txHash: txHash as any,
      blockNumber,
      amount: amount.toFixed(6),
      confirmations,
      requiredConf,
      status,
      confirmedAt: status === 'CONFIRMED' ? new Date() : null,
      userId: user?.id ?? null,
    },
  })

  return { row: upserted, confirmations, requiredConf }
}
