'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { WalletCard } from '../../app/WalletCard'
import { TopBar } from './TopBar'

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
    </div>
  )
}

export default function ClientDashboard() {
  const t = useTranslations()
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_TELEGRAM || 'https://t.me/'

  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      <TopBar supportUrl={supportUrl} />

      <div className="mx-auto max-w-5xl px-6 py-8 space-y-6">
        <header className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/50">
              Nexus Arbi
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight">
              {t('nav.dashboard')}
            </h1>
            <p className="mt-1 text-sm text-white/60">Base Sepolia · v0.1</p>
          </div>
          <Link className="text-sm text-white/70 hover:text-white" href="/admin">
            {t('nav.admin')} →
          </Link>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <div className="font-medium">Account</div>
              <div className="text-xs text-white/50">Wallet login</div>
            </div>
            <div className="mt-4">
              <WalletCard />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="font-medium">{t('nav.rounds')}</div>
            <div className="mt-4 grid gap-2">
              <Link
                href="/rounds"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm hover:bg-black/40"
              >
                Enter 60s Rounds
              </Link>
              <Link
                href="/me"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm hover:bg-black/40"
              >
                {t('nav.me')} / KYC
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Balance (USDC)" value="—" />
          <Stat label="Balance (USDT)" value="—" />
          <Stat label="Level" value="L1" />
          <Stat label="Times (today)" value="0 / 3" />
        </div>

        <div className="grid grid-cols-5 gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 text-sm">
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href="/app">
            {t('nav.dashboard')}
          </Link>
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href="/rounds">
            {t('nav.rounds')}
          </Link>
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href="#">
            {t('nav.deposit')}
          </Link>
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href="#">
            {t('nav.withdraw')}
          </Link>
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href="/me">
            {t('nav.me')}
          </Link>
        </div>
      </div>
    </main>
  )
}
