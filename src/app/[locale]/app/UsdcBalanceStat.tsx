'use client'

import { useAccount, useChainId, useReadContract } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { erc20Abi, formatTokenAmount } from '@/lib/erc20'
import { TOKENS } from '@/lib/constants'

export function UsdcBalanceStat() {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()

  const usdc = TOKENS.baseSepolia.USDC as `0x${string}`

  const decimalsQ = useReadContract({
    address: usdc,
    abi: erc20Abi,
    functionName: 'decimals',
    query: {
      enabled: Boolean(isConnected && chainId === baseSepolia.id),
    },
  })

  const balanceQ = useReadContract({
    address: usdc,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
    query: {
      enabled: Boolean(isConnected && address && chainId === baseSepolia.id),
      refetchInterval: 15_000,
    },
  })

  let value = '—'
  if (isConnected && chainId !== baseSepolia.id) value = 'Wrong network'
  else if (decimalsQ.isLoading || balanceQ.isLoading) value = 'Loading…'
  else if (decimalsQ.error || balanceQ.error) value = 'Error'
  else if (typeof decimalsQ.data === 'number' && typeof balanceQ.data === 'bigint') {
    value = formatTokenAmount(balanceQ.data, decimalsQ.data)
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">Balance (USDC)</div>
      <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
    </div>
  )
}
