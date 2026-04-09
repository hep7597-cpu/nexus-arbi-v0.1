export default function Admin() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h2 className="text-2xl font-semibold">后台 Admin（施工中）</h2>
      <div className="rounded-xl border p-4">
        <div className="font-medium">将包含</div>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>管理员/审核员两级权限</li>
          <li>提现申请列表 + 审核记录</li>
          <li>通过后记录打款 tx hash</li>
        </ul>
      </div>
    </main>
  )
}
