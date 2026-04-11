// IMPORTANT: Vercel build may execute route modules during "collecting page data".
// Avoid importing Prisma client at module top-level.

let _prisma: any

export function getPrisma() {
  if (_prisma) return _prisma

  // Lazy require
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { PrismaClient } = require('../generated/prisma/client')

  const accelerateUrl =
    process.env.PRISMA_ACCELERATE_URL || 'prisma://localhost?api_key=dev'

  _prisma = new PrismaClient({ accelerateUrl })
  return _prisma
}
