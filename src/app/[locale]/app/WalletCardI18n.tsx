'use client'

import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useChainId } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import type { Locale } from '@/lib/i18n/messages'
import { getMessages } from '@/lib/i18n/messages'

export function WalletCardI18n({ locale }: { locale: Locale }) {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  const m = getMessages(locale)

  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="font-medium">{m.wallet.title}</div>
        <ConnectButton />
      </div>

      <div className="text-sm space-y-1 text-white/80">
        <div>
          <span className="text-white/50">{m.wallet.address}:</span>{' '}
          <span className="font-mono">{address ?? '-'}</span>
        </div>
        <div>
          <span className="text-white/50">{m.wallet.chain}:</span>{' '}
          <span className="font-mono">
            {chainId ? `${chainId}${chainId === baseSepolia.id ? ' (Base Sepolia)' : ''}` : '-'}
          </span>
        </div>
      </div>

      <div>
        <Link
          href="/rounds"
          className={`text-sm underline ${isConnected ? '' : 'pointer-events-none opacity-50'}`}
        >
          {m.wallet.goRounds}
        </Link>
      </div>

      {!isConnected ? (
        <div className="text-xs text-white/50">
          {m.wallet.onlyBaseSepolia}（chainId {baseSepolia.id}）
        </div>
      ) : null}
    </div>
  )
}
