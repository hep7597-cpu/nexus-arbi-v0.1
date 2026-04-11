'use client'

import { useTranslations } from 'next-intl'

export default function Me() {
  const t = useTranslations('me')

  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      <div className="mx-auto max-w-3xl px-6 py-10 space-y-6">
        <h1 className="text-2xl font-semibold">{t('title')}</h1>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
          <div className="font-medium">{t('kyc')}</div>
          <div className="text-sm text-white/60">{t('kycHint')}</div>
          <button className="mt-3 rounded-xl bg-amber-400 px-4 py-2 text-sm font-medium text-black">
            Start KYC (v0.1 placeholder)
          </button>
        </div>
      </div>
    </main>
  )
}
