import Link from 'next/link'

export default function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Nexus Arbi</h1>
        <p className="text-muted-foreground">v0.1 Preview</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link href="app" className="rounded-xl border p-4 hover:bg-muted/50">
          <div className="font-medium">Client</div>
          <div className="text-sm text-muted-foreground">Dashboard / Rounds / Me</div>
        </Link>

        <Link href="admin" className="rounded-xl border p-4 hover:bg-muted/50">
          <div className="font-medium">Admin</div>
          <div className="text-sm text-muted-foreground">Withdrawals / Deposits</div>
        </Link>
      </div>
    </main>
  )
}
