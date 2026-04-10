import { PrismaClient } from '@prisma/client'

const datasourceUrl = process.env.DATABASE_URL_APP || process.env.DATABASE_URL
if (!datasourceUrl) {
  // Avoid silent misconfig in serverless environments.
  console.warn('Missing DATABASE_URL_APP / DATABASE_URL')
}

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    datasourceUrl,
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
