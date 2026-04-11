'use client'

import type { Locale } from '@/lib/i18n/messages'
import { getMessages } from '@/lib/i18n/messages'

export default function Me({ params }: { params: Promise<{ locale: string }> }) {
  const locale: Locale = (params as any)?.locale === 'en' ? 'en' : 'zh'
  const m = getMessages(locale)

  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      <div className="mx-auto max-w-3xl px-6 py-10 space-y-6">
        <h1 className="text-2xl font-semibold">{m.me.title}</h1>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
          <div className="font-medium">{m.me.kyc}</div>
          <div className="text-sm text-white/60">{m.me.kycHint}</div>
          <button className="mt-3 rounded-xl bg-amber-400 px-4 py-2 text-sm font-medium text-black">
            Start KYC (v0.1 placeholder)
          </button>
        </div>
      </div>
    </main>
  )
}
