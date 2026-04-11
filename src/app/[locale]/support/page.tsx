'use client'

import { useTranslations } from 'next-intl'

export default function Support() {
  const t = useTranslations('support')
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_TELEGRAM || 'https://t.me/'

  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      <div className="mx-auto max-w-3xl px-6 py-10 space-y-6">
        <h1 className="text-2xl font-semibold">{t('title')}</h1>

        <a
          className="inline-flex rounded-xl bg-amber-400 px-4 py-2 text-sm font-medium text-black"
          href={supportUrl}
          target="_blank"
        >
          {t('openTelegram')}
        </a>

        <div className="text-sm text-white/60">
          v0.1 暂时跳转 Telegram；后续可接工单系统/在线客服。
        </div>
      </div>
    </main>
  )
}
