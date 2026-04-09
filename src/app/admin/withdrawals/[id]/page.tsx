import Link from 'next/link'

export default async function WithdrawalDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold">提现详情</h2>
          <p className="text-sm text-muted-foreground font-mono">{id}</p>
        </div>
        <Link className="underline" href="/admin/withdrawals">
          返回列表
        </Link>
      </div>

      <div className="rounded-xl border p-4 space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-muted-foreground">Coin</span><span>USDC</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Amount</span><span>120.00</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">To</span><span className="font-mono">0x1234...abcd</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span>PENDING</span></div>
      </div>

      <div className="rounded-xl border p-4 space-y-3">
        <div className="font-medium">审核操作（v0.1）</div>
        <p className="text-sm text-muted-foreground">
          审核通过后你手动链上打款，再回填 tx hash 并标记 PAID。
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          <button className="rounded-md bg-black px-3 py-2 text-white">
            Approve
          </button>
          <button className="rounded-md border px-3 py-2">Reject</button>
        </div>

        <div className="space-y-1">
          <label className="text-sm">Paid Tx Hash（打款后填写）</label>
          <input
            className="w-full rounded-md border bg-transparent px-3 py-2 font-mono text-xs"
            placeholder="0x..."
          />
        </div>

        <button className="rounded-md border px-3 py-2">Mark as PAID</button>

        <p className="text-xs text-muted-foreground">
          备注：当前按钮为 UI 占位，后续接 API 写入 WithdrawOrder。
        </p>
      </div>
    </main>
  )
}
