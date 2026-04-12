'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

import type { Locale } from '@/lib/i18n/messages'
import { getMessages } from '@/lib/i18n/messages'

type Row = {
  id: string
  orderNo: string
  coin: 'USDC' | 'USDT'
  amount: string
  toAddress: string
  status: string
  createdAt: string
}

export default function Withdrawals({ params }: { params: Promise<{ locale: string }> }) {
  const locale: Locale = (params as any)?.locale === 'en' ? 'en' : 'zh'
  const m = getMessages(locale)

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
          <h2 className="text-2xl font-semibold">{m.admin.withdrawalsTitle}</h2>
          <p className="text-sm text-muted-foreground">{m.admin.withdrawalsHint}</p>
        </div>
        <Link className="underline" href={`/${locale}/admin`}>
          {m.admin.backToAdmin}
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {(['USDC', 'USDT', 'ALL'] as const).map((c) => (
          <button
            key={c}
            className={`rounded-full border px-3 py-1 text-sm ${coin === c ? 'bg-black text-white' : ''}`}
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
            className={`rounded-full border px-3 py-1 text-sm ${status === s ? 'bg-muted' : ''}`}
            onClick={() => setStatus(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border">
        <div className="grid grid-cols-12 gap-2 border-b bg-muted/40 px-4 py-2 text-xs font-medium">
          <div className="col-span-3">{m.admin.orderNo}</div>
          <div className="col-span-1">{m.admin.coin}</div>
          <div className="col-span-2">{m.admin.amount}</div>
          <div className="col-span-4">{m.admin.to}</div>
          <div className="col-span-1">{m.admin.status}</div>
          <div className="col-span-1">{m.admin.view}</div>
        </div>

        {loading ? (
          <div className="p-4 text-sm text-muted-foreground">{m.admin.loading}</div>
        ) : rows.length === 0 ? (
          <div className="p-4 text-sm text-muted-foreground">{m.admin.noRecords}</div>
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
                <Link className="underline" href={`/${locale}/admin/withdrawals/${r.id}`}>
                  {m.admin.open}
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      <p className="text-xs text-muted-foreground">{m.admin.withdrawalsNote}</p>
    </main>
  )
}
