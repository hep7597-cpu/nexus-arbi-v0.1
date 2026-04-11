import { PrismaClient } from '@/generated/prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// IMPORTANT:
// - Vercel build must not try to connect to DB.
// - Prisma 7 + custom output client in this repo expects a constructor option.
// We provide a harmless placeholder for build-time route collection.
const accelerateUrl =
  process.env.PRISMA_ACCELERATE_URL || 'prisma://localhost?api_key=dev'

export const prisma =
  global.prisma || (new PrismaClient({ accelerateUrl } as any) as any)

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
