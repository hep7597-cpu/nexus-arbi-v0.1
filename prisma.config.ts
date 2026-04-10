// Prisma 7 config
import 'dotenv/config'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'npx tsx prisma/seed.ts',
  },
  datasource: {
    // Prefer explicit app-managed url (Vercel env var), fallback to default.
    url: process.env.DATABASE_URL_APP || process.env.DATABASE_URL,
  },
})
