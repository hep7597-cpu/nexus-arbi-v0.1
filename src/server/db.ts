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

  // Prisma 7 generated client in this repo expects `accelerateUrl`.
  // We feed it the DB connection via prisma+postgres (works for Postgres) and put the real URL in api_key.
  // Format: prisma+postgres://<host>?api_key=<encoded-db-url>
  const accelerateUrl = `prisma+postgres://localhost?api_key=${encodeURIComponent(url)}`
  _prisma = new PrismaClient({ accelerateUrl })
  return _prisma
}
