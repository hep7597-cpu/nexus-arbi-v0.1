import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { upsertDepositByTxHash } from '@/server/deposits'

function isTxHash(x: string) {
  return /^0x[0-9a-fA-F]{64}$/.test(x)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => ({}))
  const txHash = String(body?.txHash || '')
  if (!isTxHash(txHash)) return NextResponse.json({ error: 'invalid txHash' }, { status: 400 })

  try {
    const result = await upsertDepositByTxHash(txHash as any)
    return NextResponse.json({ ok: true, result })
  } catch (e: any) {
    return NextResponse.json({ error: 'poll_failed', message: e?.message || String(e) }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const url = new URL(req.url)
  const txHash = String(url.searchParams.get('txHash') || '')
  if (!isTxHash(txHash)) return NextResponse.json({ error: 'invalid txHash' }, { status: 400 })

  try {
    const result = await upsertDepositByTxHash(txHash as any)
    return NextResponse.json({ ok: true, result })
  } catch (e: any) {
    return NextResponse.json({ error: 'poll_failed', message: e?.message || String(e) }, { status: 500 })
  }
}
