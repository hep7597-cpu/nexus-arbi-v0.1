'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function WithdrawalDetail({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string>('')
  const [row, setRow] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [note, setNote] = useState('')
  const [paidTxHash, setPaidTxHash] = useState('')
  const [msg, setMsg] = useState<string | null>(null)

  async function reload() {
    setLoading(true)
    const res = await fetch(`/api/admin/withdrawals/${id}`)
    const data = await res.json()
    setRow(data.row)
    setLoading(false)
  }

  useEffect(() => {
    let ok = true
    ;(async () => {
      const { id: pid } = await params
      if (!ok) return
      setId(pid)
    })()
    return () => {
      ok = false
    }
  }, [params])

  useEffect(() => {
    if (!id) return
    reload()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function act(action: 'APPROVE' | 'REJECT' | 'PAID') {
    setMsg(null)
    const res = await fetch(`/api/admin/withdrawals/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action, note, paidTxHash }),
    })
    const data = await res.json()
    if (!res.ok) {
      setMsg(data.error || 'failed')
      return
    }
    setRow(data.row)
    setMsg('OK')
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold">提现详情</h2>
          <p className="text-sm text-muted-foreground font-mono">{id}</p>
        </div>
        <Link className="underline" href="/admin/withdrawals">
          返回列表
        </Link>
      </div>

      {loading ? (
        <div className="text-sm text-muted-foreground">Loading…</div>
      ) : !row ? (
        <div className="text-sm text-red-500">Not found</div>
      ) : (
        <>
          <div className="rounded-xl border p-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">OrderNo</span><span className="font-mono text-xs">{row.orderNo}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Coin</span><span>{row.coin}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Amount</span><span>{row.amount}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">To</span><span className="font-mono text-xs">{row.toAddress}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span>{row.status}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">PaidTxHash</span><span className="font-mono text-xs">{row.paidTxHash || '-'}</span></div>
          </div>

          <div className="rounded-xl border p-4 space-y-3">
            <div className="font-medium">审核操作</div>

            <div className="space-y-1">
              <label className="text-sm">审核备注</label>
              <textarea
                className="w-full rounded-md border bg-transparent px-3 py-2 text-sm"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="optional"
              />
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <button
                className="rounded-md bg-black px-3 py-2 text-white"
                onClick={() => act('APPROVE')}
              >
                Approve
              </button>
              <button className="rounded-md border px-3 py-2" onClick={() => act('REJECT')}>
                Reject
              </button>
            </div>

            <div className="space-y-1">
              <label className="text-sm">Paid Tx Hash（打款后填写）</label>
              <input
                className="w-full rounded-md border bg-transparent px-3 py-2 font-mono text-xs"
                placeholder="0x..."
                value={paidTxHash}
                onChange={(e) => setPaidTxHash(e.target.value)}
              />
            </div>

            <button className="rounded-md border px-3 py-2" onClick={() => act('PAID')}>
              Mark as PAID
            </button>

            {msg ? <p className="text-sm">{msg}</p> : null}
          </div>
        </>
      )}
    </main>
  )
}
