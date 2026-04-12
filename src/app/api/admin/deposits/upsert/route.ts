import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { getPrisma } from '@/server/db'

function isTxHash(x: string) {
  return /^0x[0-9a-fA-F]{64}$/.test(x)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => ({}))

  const txHash = String(body?.txHash || '')
  if (!isTxHash(txHash)) return NextResponse.json({ error: 'invalid txHash' }, { status: 400 })

  const prisma = getPrisma()
  const row = await prisma.depositOrder.upsert({
    where: { txHash: txHash as any },
    update: {
      chain: body.chain ?? 'BASE',
      coin: body.coin ?? 'USDC',
      toAddress: String(body.toAddress || '').toLowerCase(),
      fromAddress: body.fromAddress ? String(body.fromAddress).toLowerCase() : null,
      blockNumber: body.blockNumber ?? null,
      amount: String(body.amount || '0'),
      confirmations: Number(body.confirmations || 0),
      requiredConf: Number(body.requiredConfirmations || 10),
      status: String(body.status || 'PENDING'),
      confirmedAt: body.confirmedAt ? new Date(body.confirmedAt) : null,
    },
    create: {
      orderNo: `DP${Date.now()}`,
      chain: body.chain ?? 'BASE',
      coin: body.coin ?? 'USDC',
      toAddress: String(body.toAddress || '').toLowerCase(),
      fromAddress: body.fromAddress ? String(body.fromAddress).toLowerCase() : null,
      txHash: txHash as any,
      blockNumber: body.blockNumber ?? null,
      amount: String(body.amount || '0'),
      confirmations: Number(body.confirmations || 0),
      requiredConf: Number(body.requiredConfirmations || 10),
      status: String(body.status || 'PENDING'),
      confirmedAt: body.confirmedAt ? new Date(body.confirmedAt) : null,
    },
  })

  return NextResponse.json({ ok: true, row })
}
