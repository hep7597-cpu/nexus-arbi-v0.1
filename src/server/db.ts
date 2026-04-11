// IMPORTANT: Vercel build may execute route modules during "collecting page data".
// Avoid importing Prisma client at module top-level.

let _prisma: any

export function getPrisma() {
  if (_prisma) return _prisma

  // Lazy require
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { PrismaClient } = require('../generated/prisma/client')

  const url = process.env.DATABASE_URL_APP || process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL_APP/DATABASE_URL is missing')

  // Use direct DB connection in runtime
  _prisma = new PrismaClient({ datasourceUrl: url } as any)
  return _prisma
}
