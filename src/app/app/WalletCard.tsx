'use client'

import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useChainId } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'

export function WalletCard() {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()

  return (
    <div className="rounded-xl border p-4 space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="font-medium">钱包</div>
        <ConnectButton />
      </div>

      <div className="text-sm space-y-1">
        <div>
          <span className="text-muted-foreground">Address:</span>{' '}
          <span className="font-mono">{address ?? '-'}</span>
        </div>
        <div>
          <span className="text-muted-foreground">Chain:</span>{' '}
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
          去 60 秒轮次
        </Link>
      </div>

      {!isConnected ? (
        <div className="text-xs text-muted-foreground">
          仅支持 Base Sepolia（chainId {baseSepolia.id}）。
        </div>
      ) : null}
    </div>
  )
}
