'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Admin() {
  const [msg, setMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function seed() {
    setMsg(null)
    setLoading(true)
    try {
      const res = await fetch('/api/admin/seed-withdrawals', { method: 'POST' })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'failed')
      setMsg(`OK: created ${data.created}`)
    } catch (e: any) {
      setMsg(e?.message || 'failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h2 className="text-2xl font-semibold">后台 Admin</h2>

      <div className="rounded-xl border p-4 space-y-3">
        <div className="font-medium">快捷入口</div>
        <div>
          <Link className="underline" href="/admin/withdrawals">
            提现审核列表
          </Link>
        </div>
      </div>

      <div className="rounded-xl border p-4 space-y-3">
        <div className="font-medium">测试数据</div>
        <p className="text-sm text-muted-foreground">一键插入 2 条 WithdrawOrder 方便验收。</p>
        <button
          className="rounded-md bg-black px-3 py-2 text-white disabled:opacity-50"
          onClick={seed}
          disabled={loading}
        >
          {loading ? 'Seeding…' : 'Seed 2 WithdrawOrders'}
        </button>
        {msg ? <div className="text-sm">{msg}</div> : null}
      </div>
    </main>
  )
}
