'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

import type { Locale } from '@/lib/i18n/messages'
import { getMessages } from '@/lib/i18n/messages'

export default function AdminLogin({ params }: { params: Promise<{ locale: string }> }) {
  const locale: Locale = (params as any)?.locale === 'en' ? 'en' : 'zh'
  const m = getMessages(locale)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <main className="mx-auto max-w-md p-6 space-y-6">
      <h1 className="text-2xl font-semibold">{m.admin.loginTitle}</h1>

      <form
        className="space-y-3"
        onSubmit={async (e) => {
          e.preventDefault()
          setLoading(true)
          setError(null)
          await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: `/${locale}/admin`,
          })
          // If credentials are wrong, NextAuth will redirect back with an error.
          setLoading(false)
        }}
      >
        <div className="space-y-1">
          <label className="text-sm">{m.admin.email}</label>
          <input
            className="w-full rounded-md border bg-transparent px-3 py-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm">{m.admin.password}</label>
          <input
            className="w-full rounded-md border bg-transparent px-3 py-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        {error ? <p className="text-sm text-red-500">{error}</p> : null}

        <button
          className="w-full rounded-md bg-black px-3 py-2 text-white disabled:opacity-50"
          disabled={loading}
          type="submit"
        >
          {loading ? m.admin.signingIn : m.admin.signIn}
        </button>

        <p className="text-xs text-muted-foreground">{m.admin.loginHint}</p>
      </form>
    </main>
  )
}
