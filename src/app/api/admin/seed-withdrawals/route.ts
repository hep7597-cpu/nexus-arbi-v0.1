import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/server/db'

function orderNo() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const rand = Math.floor(Math.random() * 1e6)
    .toString()
    .padStart(6, '0')
  return `WD${y}${m}${day}${rand}`
}

export async function POST() {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  // Create a deterministic demo user if missing.
  const wallet = '0x000000000000000000000000000000000000dead'
  const user = await prisma.user.upsert({
    where: { walletAddress: wallet },
    update: {},
    create: { walletAddress: wallet },
  })

  const created = await prisma.withdrawOrder.createMany({
    data: [
      {
        orderNo: orderNo(),
        userId: user.id,
        chain: 'BASE',
        coin: 'USDC',
        amount: '120.00',
        toAddress: '0x1234567890abcdef1234567890abcdef12345678',
        status: 'PENDING',
      },
      {
        orderNo: orderNo(),
        userId: user.id,
        chain: 'BASE',
        coin: 'USDT',
        amount: '500.00',
        toAddress: '0xbeefbeefbeefbeefbeefbeefbeefbeefbeefbeef',
        status: 'APPROVED',
        reviewedAt: new Date(),
        reviewNote: 'ok',
      },
    ],
  })

  return NextResponse.json({ ok: true, created: created.count })
}
