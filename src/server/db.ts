import { PrismaClient } from '@/generated/prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// This project uses Prisma Client ("client" engine type) which requires either
// an adapter or accelerateUrl in the constructor. For local dev, we provide a
// harmless placeholder to satisfy the constructor during `next build` route data
// collection. In real deployments, set PRISMA_ACCELERATE_URL (recommended) and
// DATABASE_URL.
const accelerateUrl =
  process.env.PRISMA_ACCELERATE_URL || 'https://accelerate.prisma-data.net'

export const prisma =
  global.prisma ||
  new PrismaClient({
    accelerateUrl,
  } as any)

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
