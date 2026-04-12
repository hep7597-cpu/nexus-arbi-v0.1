'use client'

import { useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n/messages'
import { getMessages } from '@/lib/i18n/messages'

type DepositRow = {
  id: string
  txHash: string
  chain: string
  coin: string
  amount: string
  fromAddress: string | null
  toAddress: string
  blockNumber: number | null
  confirmations: number
  requiredConfirmations: number
  status: string
  creditedAt: string | null
  createdAt: string
}

const DEMO_TX = '0xb5ae44f01f045e8233f092820bfed4766546f3d3293724c90b81189cce016e03'

export default function AdminDeposits({ params }: { params: Promise<{ locale: string }> }) {
  const locale: Locale = (params as any)?.locale === 'en' ? 'en' : 'zh'
  const m = getMessages(locale)

  const [rows, setRows] = useState<DepositRow[]>([])
  const [msg, setMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function refresh() {
    const res = await fetch('/api/admin/deposits')
    const data = await res.json()
    setRows(data.items ?? [])
  }

  async function pollDemo() {
    setMsg(null)
    setLoading(true)
    try {
      const res = await fetch('/api/admin/deposits/poll', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ txHash: DEMO_TX }),
      })
      const contentType = res.headers.get('content-type') || ''
      const text = await res.text()

      // If the API accidentally returns an HTML error page (404/500), show a readable message.
      if (contentType.includes('text/html')) {
        throw new Error(`HTTP ${res.status}: server returned HTML (check route/auth).`)
      }

      let data: any = null
      try {
        data = text ? JSON.parse(text) : null
      } catch {
        // ignore
      }

      if (!res.ok) {
        const msg = data?.message ? `${data.error}: ${data.message}` : (data?.error || text || 'failed')
        throw new Error(msg)
      }
      setMsg('OK')
      await refresh()
    } catch (e: any) {
      setMsg(e?.message || 'failed')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh().catch(() => {})
  }, [])

  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Deposits</h1>
        <button
          className="rounded-md bg-black px-3 py-2 text-white disabled:opacity-50"
          onClick={pollDemo}
          disabled={loading}
        >
          {loading ? 'Polling…' : 'Poll demo tx + upsert'}
        </button>
      </div>

      <p className="text-sm text-muted-foreground">
        Demo tx: <span className="font-mono">{DEMO_TX}</span>
      </p>

      {msg ? <div className="text-sm">{msg}</div> : null}

      <div className="overflow-x-auto rounded-xl border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/50">
            <tr className="text-left">
              <th className="p-3">txHash</th>
              <th className="p-3">amount</th>
              <th className="p-3">status</th>
              <th className="p-3">conf</th>
              <th className="p-3">to</th>
              <th className="p-3">creditedAt</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-mono max-w-[220px] truncate">{r.txHash}</td>
                <td className="p-3">{r.amount}</td>
                <td className="p-3">{r.status}</td>
                <td className="p-3">
                  {r.confirmations}/{r.requiredConfirmations}
                </td>
                <td className="p-3 font-mono max-w-[180px] truncate">{r.toAddress}</td>
                <td className="p-3">{r.creditedAt ? 'YES' : '-'}</td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td className="p-3 text-muted-foreground" colSpan={6}>
                  {m.admin.noRecords}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </main>
  )
}
