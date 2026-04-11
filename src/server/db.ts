import { PrismaClient } from '../generated/prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// Vercel build must not connect DB.
// Our generated Prisma client requires an "accelerateUrl" option (Prisma 7).
const accelerateUrl =
  process.env.PRISMA_ACCELERATE_URL || 'prisma://localhost?api_key=dev'

export const prisma =
  global.prisma || (new PrismaClient({ accelerateUrl } as any) as any)

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
