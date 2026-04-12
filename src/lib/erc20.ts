import type { Address } from 'viem'

export const erc20Abi = [
  {
    type: 'function',
    name: 'decimals',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: '', type: 'uint8' }],
  },
  {
    type: 'function',
    name: 'balanceOf',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
] as const

export function formatTokenAmount(value: bigint, decimals: number) {
  const s = value.toString().padStart(decimals + 1, '0')
  const i = s.slice(0, -decimals)
  let f = s.slice(-decimals)
  f = f.replace(/0+$/, '')
  return f ? `${i}.${f}` : i
}

export function toAddressLower(a: Address) {
  return a.toLowerCase() as Address
}
