'use client'

import Link from 'next/link'
import { useState } from 'react'

import type { Locale } from '@/lib/i18n/messages'
import { getMessages } from '@/lib/i18n/messages'

export default function Admin({ params }: { params: Promise<{ locale: string }> }) {
  const locale: Locale = (params as any)?.locale === 'en' ? 'en' : 'zh'
  const m = getMessages(locale)

  const [msg, setMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function seed() {
    setMsg(null)
    setLoading(true)
    try {
      const res = await fetch('/api/admin/seed-withdrawals', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      })

      const text = await res.text()
      let data: any = null
      try {
        data = text ? JSON.parse(text) : null
      } catch {
        // ignore
      }

      if (!res.ok) throw new Error(data?.error || text || 'failed')
      setMsg(`${m.admin.seedOk}: ${data?.created ?? '?'}`)
    } catch (e: any) {
      setMsg(e?.message || 'failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h2 className="text-2xl font-semibold">{m.admin.title}</h2>

      <div className="rounded-xl border p-4 space-y-3">
        <div className="font-medium">{m.admin.quickLinks}</div>
        <div>
          <Link className="underline" href={`/${locale}/admin/withdrawals`}>
            {m.admin.withdrawalList}
          </Link>
        </div>
        <div>
          <Link className="underline" href={`/${locale}/admin/deposits`}>
            充值入账列表
          </Link>
        </div>
      </div>

      <div className="rounded-xl border p-4 space-y-3">
        <div className="font-medium">{m.admin.testData}</div>
        <p className="text-sm text-muted-foreground">{m.admin.seedHint}</p>
        <button
          className="rounded-md bg-black px-3 py-2 text-white disabled:opacity-50"
          onClick={seed}
          disabled={loading}
        >
          {loading ? m.admin.seeding : m.admin.seedButton}
        </button>
        {msg ? <div className="text-sm">{msg}</div> : null}
      </div>
    </main>
  )
}
