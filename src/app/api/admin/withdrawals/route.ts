import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { getPrisma } from '@/server/db'

export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const coin = searchParams.get('coin')?.toUpperCase()
  const status = searchParams.get('status')?.toUpperCase()

  const where: any = {}
  if (coin && ['USDC', 'USDT'].includes(coin)) where.coin = coin
  if (status && status !== 'ALL') where.status = status

  const rows = await getPrisma().withdrawOrder.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    take: 100,
  })

  return NextResponse.json({ rows })
}
