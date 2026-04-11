'use client'

import Link from 'next/link'
import { WalletCard } from './WalletCard'

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
    </div>
  )
}

export default function AppHome() {
  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      <div className="mx-auto max-w-5xl px-6 py-8 space-y-6">
        <header className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/50">
              Nexus Arbi
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-white/60">
              金融专业风 v0.1 预览（Base Sepolia）
            </p>
          </div>
          <Link className="text-sm text-white/70 hover:text-white" href="/admin">
            Admin →
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
            <div className="font-medium">Quick Actions</div>
            <div className="mt-4 grid gap-2">
              <Link
                href="/rounds"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm hover:bg-black/40"
              >
                Enter 60s Rounds
              </Link>
              <Link
                href="/admin/withdrawals?coin=ALL"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm hover:bg-black/40"
              >
                Withdrawals (Admin)
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

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <div className="font-medium">System Status</div>
            <div className="text-xs text-white/50">v0.1 checklist</div>
          </div>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Wallet connect</span>
              <span className="text-emerald-300">OK</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Rounds UI</span>
              <span className="text-emerald-300">OK</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Deposit confirm → credit → service code</span>
              <span className="text-amber-300">In progress</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
