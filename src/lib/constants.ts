import { type Address } from 'viem'

export const APP = {
  name: 'Nexus Arbi',
} as const

export const CHAIN = {
  baseSepolia: {
    id: 84532,
    name: 'Base Sepolia',
    explorer: 'https://sepolia.basescan.org',
    // Public RPCs are fine for dev/testing; for prod use a dedicated provider.
    rpcUrls: [
      'https://sepolia.base.org',
      'https://base-sepolia-rpc.publicnode.com',
    ],
  },
} as const

// Receiver wallet (platform custody) for v0.1 testing
export const PLATFORM_RECEIVE_ADDRESS =
  '0xf5614395a10ff150D2bdD79c0A69969E9846900D' as Address

// Known test sender for E2E validation
export const TEST_SENDER_ADDRESS =
  '0x5b89970bdfFF619fFCba18b0E676D11E7f41c4dE' as Address

// NOTE: Fill with official Base Sepolia USDC address after verification.
export const TOKENS = {
  baseSepolia: {
    // Circle official USDC on Base Sepolia (testnet)
    USDC: '0x036CbD53842c5426634e7929541eC2318f3dCF7e' as Address,
  },
} as const

export const DEPOSIT = {
  minAmount: 100,
  requiredConfirmations: 10,
} as const

export const PROFIT = {
  rate: 0.02,
  roundSeconds: 60,
} as const

export const LEVELS = [
  { level: 'L1', minBalance: 100, dailyTimes: 3, codeTimes: 1, codesPerDeposit: 1 },
  { level: 'L2', minBalance: 1000, dailyTimes: 5, codeTimes: 3, codesPerDeposit: 3 },
  { level: 'L3', minBalance: 10000, dailyTimes: 8, codeTimes: 5, codesPerDeposit: 5 },
] as const
