'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <main className="mx-auto max-w-md p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Admin Login</h1>

      <form
        className="space-y-3"
        onSubmit={async (e) => {
          e.preventDefault()
          setLoading(true)
          setError(null)
          const res = await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: '/admin',
          })
          // signIn will redirect on success; on failure it may return null.
          if (res && (res as any).error) setError('Invalid credentials')
          setLoading(false)
        }}
      >
        <div className="space-y-1">
          <label className="text-sm">Email</label>
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
          <label className="text-sm">Password</label>
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
          {loading ? 'Signing in…' : 'Sign in'}
        </button>

        <p className="text-xs text-muted-foreground">
          v0.1 使用环境变量 ADMIN_EMAIL / ADMIN_PASSWORD_HASH 做最小可用登录。
        </p>
      </form>
    </main>
  )
}
