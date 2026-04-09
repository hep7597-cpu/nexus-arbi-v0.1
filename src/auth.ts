import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const c = credentials as unknown as { email?: string; password?: string } | undefined
        const email = c?.email?.toLowerCase().trim()
        const password = c?.password ?? ''

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
        ;(token as any).role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      ;(session.user as any).role = (token as any).role
      return session
    },
  },
})
