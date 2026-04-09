import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

// v0.1 NOTE:
// - This is a simple credential auth for admin panel.
// - Replace with DB-backed AdminUser table + hashed passwords later.

const handler = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase().trim()
        const password = credentials?.password ?? ''

        const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase().trim()
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH

        if (!adminEmail || !adminPasswordHash) return null
        if (!email || email !== adminEmail) return null

        const ok = await bcrypt.compare(password, adminPasswordHash)
        if (!ok) return null

        return { id: 'admin', email: adminEmail, role: 'ADMIN' }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // @ts-expect-error
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      // @ts-expect-error
      session.user.role = token.role
      return session
    },
  },
})

export { handler as GET, handler as POST }
