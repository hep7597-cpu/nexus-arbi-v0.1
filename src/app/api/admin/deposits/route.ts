import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { getPrisma } from '@/server/db'

export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const url = new URL(req.url)
  const status = url.searchParams.get('status') || undefined

  const prisma = getPrisma()
  const items = await prisma.depositOrder.findMany({
    where: status ? { status: status as any } : undefined,
    orderBy: { createdAt: 'desc' },
    take: 100,
  })

  return NextResponse.json({ items })
}
