export default function AppHome() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h2 className="text-2xl font-semibold">用户端（施工中）</h2>

      <div className="rounded-xl border p-4">
        <div className="font-medium">下一步接入</div>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>RainbowKit 连接钱包（Base Sepolia）</li>
          <li>USDC 余额 / 等级 / 次数</li>
          <li>充值订单（10 confirmations）</li>
        </ul>
      </div>
    </main>
  )
}
