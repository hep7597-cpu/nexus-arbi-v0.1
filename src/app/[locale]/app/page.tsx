import Link from 'next/link'
import { WalletCard } from '../../app/WalletCard'
import type { Locale } from '@/lib/i18n/messages'
import { getMessages } from '@/lib/i18n/messages'
import { TopBar } from './TopBar'
import { UsdcBalanceStat } from './UsdcBalanceStat'

export default async function ClientDashboard({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const lang: Locale = locale === 'en' ? 'en' : 'zh'
  const m = getMessages(lang)
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_TELEGRAM || 'https://t.me/nexusArbiapp'

  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      <TopBar supportUrl={supportUrl} locale={lang} />

      <div className="mx-auto max-w-5xl px-6 py-8 space-y-6">
        <header className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/50">Nexus Arbi</div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight">{m.nav.dashboard}</h1>
            <p className="mt-1 text-sm text-white/60">Base Sepolia · v0.1</p>
          </div>
          <Link className="text-sm text-white/70 hover:text-white" href="/admin">
            {m.nav.admin} →
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
            <div className="font-medium">{m.nav.rounds}</div>
            <div className="mt-4 grid gap-2">
              <Link
                href="/rounds"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm hover:bg-black/40"
              >
                Enter 60s Rounds
              </Link>
              <Link
                href={`/${lang}/me`}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm hover:bg-black/40"
              >
                {m.nav.me} / KYC
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UsdcBalanceStat />
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">Balance (USDT)</div>
            <div className="mt-1 text-lg font-semibold tracking-tight">—</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">Level</div>
            <div className="mt-1 text-lg font-semibold tracking-tight">L1</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">Times (today)</div>
            <div className="mt-1 text-lg font-semibold tracking-tight">0 / 3</div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 text-sm">
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href={`/${lang}/app`}>
            {m.nav.dashboard}
          </Link>
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href="/rounds">
            {m.nav.rounds}
          </Link>
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href="#">
            {m.nav.deposit}
          </Link>
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href="#">
            {m.nav.withdraw}
          </Link>
          <Link className="rounded-xl px-3 py-2 text-center hover:bg-white/5" href={`/${lang}/me`}>
            {m.nav.me}
          </Link>
        </div>
      </div>
    </main>
  )
}

