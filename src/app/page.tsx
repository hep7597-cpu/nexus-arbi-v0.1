import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Nexus Arbi</h1>
        <p className="text-muted-foreground">
          v0.1 Preview（Base Sepolia 测试流程先跑通）
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link
          href="/app"
          className="rounded-xl border p-4 hover:bg-muted/50"
        >
          <div className="font-medium">用户端</div>
          <div className="text-sm text-muted-foreground">
            连接钱包 / 余额 / 轮次
          </div>
        </Link>

        <Link
          href="/admin"
          className="rounded-xl border p-4 hover:bg-muted/50"
        >
          <div className="font-medium">后台（Admin）</div>
          <div className="text-sm text-muted-foreground">
            审核提现 / 管理
          </div>
        </Link>
      </div>
    </main>
  )
}
