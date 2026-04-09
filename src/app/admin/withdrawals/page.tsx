import Link from 'next/link'

const mock = [
  {
    id: 'wd_001',
    coin: 'USDC',
    amount: '120.00',
    toAddress: '0x1234...abcd',
    status: 'PENDING',
    createdAt: '2026-04-10 06:30',
  },
  {
    id: 'wd_002',
    coin: 'USDT',
    amount: '500.00',
    toAddress: '0xbeef...cafe',
    status: 'APPROVED',
    createdAt: '2026-04-10 06:31',
  },
]

export default async function Withdrawals({
  searchParams,
}: {
  searchParams: Promise<{ coin?: string; status?: string }>
}) {
  const sp = await searchParams
  const coin = (sp.coin || 'USDC').toUpperCase()
  const status = (sp.status || 'ALL').toUpperCase()

  const rows = mock.filter(
    (x) =>
      (coin === 'ALL' || x.coin === coin) &&
      (status === 'ALL' || x.status === status)
  )

  const tab = (c: string) =>
    `?coin=${encodeURIComponent(c)}&status=${encodeURIComponent(status)}`

  const st = (s: string) =>
    `?coin=${encodeURIComponent(coin)}&status=${encodeURIComponent(s)}`

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">提现审核</h2>
          <p className="text-sm text-muted-foreground">
            v0.1：审核通过后你手动链上打款，后台只记录 tx hash。
          </p>
        </div>
        <Link className="underline" href="/admin">
          返回后台首页
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          className={`rounded-full border px-3 py-1 text-sm ${
            coin === 'USDC' ? 'bg-black text-white' : ''
          }`}
          href={tab('USDC')}
        >
          USDC
        </Link>
        <Link
          className={`rounded-full border px-3 py-1 text-sm ${
            coin === 'USDT' ? 'bg-black text-white' : ''
          }`}
          href={tab('USDT')}
        >
          USDT
        </Link>
        <Link
          className={`rounded-full border px-3 py-1 text-sm ${
            coin === 'ALL' ? 'bg-black text-white' : ''
          }`}
          href={tab('ALL')}
        >
          ALL
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {['ALL', 'PENDING', 'APPROVED', 'REJECTED', 'PAID'].map((s) => (
          <Link
            key={s}
            className={`rounded-full border px-3 py-1 text-sm ${
              status === s ? 'bg-muted' : ''
            }`}
            href={st(s)}
          >
            {s}
          </Link>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border">
        <div className="grid grid-cols-12 gap-2 border-b bg-muted/40 px-4 py-2 text-xs font-medium">
          <div className="col-span-2">ID</div>
          <div className="col-span-1">Coin</div>
          <div className="col-span-2">Amount</div>
          <div className="col-span-4">To</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1">View</div>
        </div>

        {rows.map((r) => (
          <div
            key={r.id}
            className="grid grid-cols-12 gap-2 px-4 py-3 text-sm border-b last:border-b-0"
          >
            <div className="col-span-2 font-mono text-xs">{r.id}</div>
            <div className="col-span-1">{r.coin}</div>
            <div className="col-span-2">{r.amount}</div>
            <div className="col-span-4 font-mono text-xs">{r.toAddress}</div>
            <div className="col-span-2">{r.status}</div>
            <div className="col-span-1">
              <Link className="underline" href={`/admin/withdrawals/${r.id}`}>
                Open
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        备注：当前为 mock 数据，后续接入 WithdrawOrder 表。
      </p>
    </main>
  )
}
