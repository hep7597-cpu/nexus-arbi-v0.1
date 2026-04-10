'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

type Row = {
  id: string
  orderNo: string
  coin: 'USDC' | 'USDT'
  amount: string
  toAddress: string
  status: string
  createdAt: string
}

export default function Withdrawals() {
  const [coin, setCoin] = useState<'USDC' | 'USDT' | 'ALL'>('USDC')
  const [status, setStatus] = useState<string>('ALL')
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(true)

  const qs = useMemo(() => {
    const sp = new URLSearchParams()
    sp.set('coin', coin)
    sp.set('status', status)
    return sp.toString()
  }, [coin, status])

  useEffect(() => {
    let ok = true
    setLoading(true)
    fetch(`/api/admin/withdrawals?${qs}`)
      .then((r) => r.json())
      .then((data) => {
        if (!ok) return
        const list = (data.rows ?? []) as any[]
        setRows(
          list.map((x) => ({
            id: x.id,
            orderNo: x.orderNo,
            coin: x.coin,
            amount: x.amount,
            toAddress: x.toAddress,
            status: x.status,
            createdAt: x.createdAt,
          }))
        )
      })
      .finally(() => ok && setLoading(false))
    return () => {
      ok = false
    }
  }, [qs])

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">提现审核</h2>
          <p className="text-sm text-muted-foreground">
            审核通过后你手动链上打款，后台记录 tx hash。
          </p>
        </div>
        <Link className="underline" href="/admin">
          返回后台首页
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {(['USDC', 'USDT', 'ALL'] as const).map((c) => (
          <button
            key={c}
            className={`rounded-full border px-3 py-1 text-sm ${
              coin === c ? 'bg-black text-white' : ''
            }`}
            onClick={() => setCoin(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {['ALL', 'PENDING', 'APPROVED', 'REJECTED', 'PAID'].map((s) => (
          <button
            key={s}
            className={`rounded-full border px-3 py-1 text-sm ${
              status === s ? 'bg-muted' : ''
            }`}
            onClick={() => setStatus(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border">
        <div className="grid grid-cols-12 gap-2 border-b bg-muted/40 px-4 py-2 text-xs font-medium">
          <div className="col-span-3">OrderNo</div>
          <div className="col-span-1">Coin</div>
          <div className="col-span-2">Amount</div>
          <div className="col-span-4">To</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">View</div>
        </div>

        {loading ? (
          <div className="p-4 text-sm text-muted-foreground">Loading…</div>
        ) : rows.length === 0 ? (
          <div className="p-4 text-sm text-muted-foreground">No records.</div>
        ) : (
          rows.map((r) => (
            <div
              key={r.id}
              className="grid grid-cols-12 gap-2 px-4 py-3 text-sm border-b last:border-b-0"
            >
              <div className="col-span-3 font-mono text-xs">{r.orderNo}</div>
              <div className="col-span-1">{r.coin}</div>
              <div className="col-span-2">{r.amount}</div>
              <div className="col-span-4 font-mono text-xs">{r.toAddress}</div>
              <div className="col-span-1">{r.status}</div>
              <div className="col-span-1">
                <Link className="underline" href={`/admin/withdrawals/${r.id}`}>
                  Open
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        备注：当前已接入数据库（WithdrawOrder）。
      </p>
    </main>
  )
}
