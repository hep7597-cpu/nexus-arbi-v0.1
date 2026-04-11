import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { getPrisma } from '@/server/db'

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const { id } = await params
  const row = await getPrisma().withdrawOrder.findUnique({ where: { id } })
  if (!row) return NextResponse.json({ error: 'not_found' }, { status: 404 })
  return NextResponse.json({ row })
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await req.json().catch(() => ({}))

  const action = body.action as string | undefined
  const note = (body.note as string | undefined) ?? null

  if (action === 'APPROVE') {
    const row = await getPrisma().withdrawOrder.update({
      where: { id },
      data: {
        status: 'APPROVED',
        reviewNote: note,
        reviewedAt: new Date(),
      },
    })
    return NextResponse.json({ row })
  }

  if (action === 'REJECT') {
    const row = await getPrisma().withdrawOrder.update({
      where: { id },
      data: {
        status: 'REJECTED',
        reviewNote: note,
        reviewedAt: new Date(),
      },
    })
    return NextResponse.json({ row })
  }

  if (action === 'PAID') {
    const paidTxHash = body.paidTxHash as string | undefined
    if (!paidTxHash) {
      return NextResponse.json({ error: 'paidTxHash_required' }, { status: 400 })
    }

    const row = await getPrisma().withdrawOrder.update({
      where: { id },
      data: {
        status: 'PAID',
        paidTxHash,
        paidAt: new Date(),
      },
    })
    return NextResponse.json({ row })
  }

  return NextResponse.json({ error: 'bad_action' }, { status: 400 })
}
