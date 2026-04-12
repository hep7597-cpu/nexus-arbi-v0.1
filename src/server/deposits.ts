import {
  createPublicClient,
  decodeFunctionData,
  http,
  parseAbi,
  type Address,
  type Hash,
} from 'viem'
import { baseSepolia } from 'viem/chains'

import { DEPOSIT, LEVELS, TOKENS } from '@/lib/constants'
import { getPrisma } from '@/server/db'

const transferAbi = parseAbi(['function transfer(address to, uint256 value)'])

function nowOrderNo() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const rand = Math.floor(Math.random() * 1e6)
    .toString()
    .padStart(6, '0')
  return `DP${y}${m}${day}${rand}`
}

export function getBaseSepoliaClient() {
  const url =
    process.env.BASE_SEPOLIA_RPC_URL ||
    process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL ||
    'https://sepolia.base.org'
  return createPublicClient({ chain: baseSepolia, transport: http(url) })
}

function genServiceCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let out = ''
  for (let i = 0; i < 10; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)]
  return out
}

export async function upsertDepositByTxHash(txHash: Hash) {
  const client = getBaseSepoliaClient()
  const prisma = getPrisma()

  const tx = await client.getTransaction({ hash: txHash })
  const receipt = await client.getTransactionReceipt({ hash: txHash })
  const latest = await client.getBlockNumber()

  const token = (tx.to ?? '0x') as Address
  if (token.toLowerCase() !== TOKENS.baseSepolia.USDC.toLowerCase()) {
    throw new Error('not_usdc_tx')
  }

  const decoded = decodeFunctionData({ abi: transferAbi, data: tx.input })
  if (decoded.functionName !== 'transfer') throw new Error('not_transfer')

  const toAddress = (decoded.args?.[0] as Address) ?? ('0x' as Address)
  const value = (decoded.args?.[1] as bigint) ?? BigInt(0)

  // USDC is 6 decimals.
  const amount = Number(value) / 1e6
  const confirmations = tx.blockNumber ? Number(latest - tx.blockNumber) + 1 : 0
  const requiredConf = DEPOSIT.requiredConfirmations

  const status =
    receipt.status === 'success' && confirmations >= requiredConf ? 'CONFIRMED' : 'PENDING'

  const user = await prisma.user.findUnique({
    where: { walletAddress: toAddress.toLowerCase() },
  })

  const upserted = await prisma.depositOrder.upsert({
    where: { txHash: txHash as any },
    update: {
      chain: 'BASE',
      coin: 'USDC',
      toAddress: toAddress.toLowerCase(),
      fromAddress: tx.from?.toLowerCase(),
      blockNumber: tx.blockNumber ?? null,
      amount: amount.toFixed(6),
      confirmations,
      requiredConf,
      status,
      confirmedAt: status === 'CONFIRMED' ? new Date() : null,
      userId: user?.id ?? null,
    },
    create: {
      orderNo: nowOrderNo(),
      chain: 'BASE',
      coin: 'USDC',
      toAddress: toAddress.toLowerCase(),
      fromAddress: tx.from?.toLowerCase(),
      txHash: txHash as any,
      blockNumber: tx.blockNumber ?? null,
      amount: amount.toFixed(6),
      confirmations,
      requiredConf,
      status,
      confirmedAt: status === 'CONFIRMED' ? new Date() : null,
      userId: user?.id ?? null,
    },
  })

  // Confirmed -> credit exactly once.
  if (status === 'CONFIRMED' && upserted.userId) {
    await prisma.$transaction(async (db: any) => {
      const fresh = await db.depositOrder.findUnique({ where: { id: upserted.id } })
      if (!fresh || fresh.creditedAt) return

      await db.user.update({
        where: { id: upserted.userId },
        data: { balanceUsdc: { increment: upserted.amount } },
      })

      if (Number(upserted.amount) >= DEPOSIT.minAmount) {
        const u2 = await db.user.findUnique({ where: { id: upserted.userId } })
        const bal = Number(u2.balanceUsdc)
        const lvl = [...LEVELS].reverse().find((x) => bal >= x.minBalance) ?? LEVELS[0]

        await db.user.update({
          where: { id: upserted.userId },
          data: { timesBalance: { increment: lvl.codeTimes } },
        })

        const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
        for (let i = 0; i < lvl.codesPerDeposit; i++) {
          for (let t = 0; t < 3; t++) {
            try {
              await db.serviceCode.create({
                data: {
                  code: genServiceCode(),
                  issuedFor: 'USDC',
                  expiresAt,
                  userId: upserted.userId,
                },
              })
              break
            } catch (e: any) {
              if (String(e?.code) === 'P2002') continue
              throw e
            }
          }
        }
      }

      await db.depositOrder.update({
        where: { id: upserted.id },
        data: { creditedAt: new Date() },
      })
    })
  }

  const final = await prisma.depositOrder.findUnique({ where: { id: upserted.id } })
  return { row: final, confirmations, requiredConf }
}
