import { auth } from '@/auth'
import Link from 'next/link'

export default async function Admin() {
  const session = await auth()

  if (!session?.user) {
    return (
      <main className="mx-auto max-w-3xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold">后台 Admin</h2>
        <p className="text-sm text-muted-foreground">需要登录才能访问。</p>
        <Link className="underline" href="/admin/login">
          去登录
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h2 className="text-2xl font-semibold">后台 Admin</h2>
      <p className="text-sm text-muted-foreground">
        已登录：{session.user.email}
      </p>

      <div className="rounded-xl border p-4">
        <div className="font-medium">下一步</div>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>提现申请列表 + 审核记录（PENDING/APPROVED/REJECTED/PAID）</li>
          <li>两级权限（ADMIN/REVIEWER）</li>
        </ul>
      </div>
    </main>
  )
}
