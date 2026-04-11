'use client'

import Link from 'next/link'
import type { Locale } from '@/lib/i18n/messages'
import { getMessages } from '@/lib/i18n/messages'

export function TopBar({ supportUrl, locale }: { supportUrl: string; locale: Locale }) {
  const m = getMessages(locale)
  const nextLocale = locale === 'zh' ? 'en' : 'zh'

  return (
    <div className="sticky top-0 z-20 border-b border-white/10 bg-[#070A10]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-400" />
          <div className="text-sm font-medium">Nexus Arbi</div>
        </div>

        <div className="flex items-center gap-3 text-xs text-white/70">
          <Link
            href={`/${nextLocale}/app`}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"
          >
            {locale === 'zh' ? 'EN' : '简'}
          </Link>

          <Link
            href={supportUrl}
            target="_blank"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"
          >
            {m.actions.support}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-2 text-xs text-amber-200/90">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-[marquee_18s_linear_infinite]">
              {m.top.announcement}: v0.1 Base Sepolia 测试中 · 提现需 KYC + 后台审核 · 请勿使用主网资产
              <span className="mx-8">•</span>
              {m.top.announcement}: 轮次收益按比例结算，示例为 2%
              <span className="mx-8">•</span>
              {m.top.announcement}: 客服请点击右上角
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
