'use client'

import * as React from 'react'

import { PROFIT } from '@/lib/constants'

import { Countdown60 } from './Countdown60'

export default function Rounds() {
  const [toast, setToast] = React.useState<string | null>(null)

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold">60 秒轮次</h2>
        <p className="text-sm text-muted-foreground">
          每轮 {PROFIT.roundSeconds}s，到期返余额（+{Math.round(PROFIT.rate * 100)}%
          ）。
        </p>
      </header>

      <section className="rounded-xl border p-4 space-y-4">
        <Countdown60 durationSeconds={PROFIT.roundSeconds} />

        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-muted-foreground">可用次数（占位）</div>
            <div className="text-lg font-medium">— / —</div>
          </div>

          <button
            type="button"
            onClick={() => {
              setToast('已模拟参与（后端未接入）')
              window.setTimeout(() => setToast(null), 2000)
            }}
            className="rounded-lg bg-black text-white px-4 py-2 text-sm hover:opacity-90"
          >
            参与本轮（Mock）
          </button>
        </div>

        {toast ? (
          <div className="text-sm rounded-lg border px-3 py-2 bg-black/5">
            {toast}
          </div>
        ) : null}
      </section>

      <section className="rounded-xl border p-4 space-y-2">
        <h3 className="font-medium">次数消耗规则（占位）</h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>• 参与一次消耗 1 次。</p>
          <p>• 次数来源：每日赠送 + 激活码 + 充值赠送（后续接入）。</p>
          <p>• 当前页面仅展示 UI，占位数据不代表真实状态。</p>
        </div>
      </section>
    </main>
  )
}
