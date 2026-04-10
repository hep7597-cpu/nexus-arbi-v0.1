'use client'

import * as React from 'react'

type Countdown60Props = {
  /** Total round duration in seconds. Defaults to 60. */
  durationSeconds?: number
  /** Auto start the countdown. Defaults to true. */
  autoStart?: boolean
  /** Called when countdown hits 0. */
  onComplete?: () => void
}

export function Countdown60({
  durationSeconds = 60,
  autoStart = true,
  onComplete,
}: Countdown60Props) {
  const [running, setRunning] = React.useState(autoStart)
  const [endAt, setEndAt] = React.useState<number | null>(() =>
    autoStart ? Date.now() + durationSeconds * 1000 : null,
  )
  const [now, setNow] = React.useState(() => Date.now())

  React.useEffect(() => {
    if (!running) return
    if (!endAt) return

    const id = window.setInterval(() => {
      setNow(Date.now())
    }, 200)

    return () => window.clearInterval(id)
  }, [running, endAt])

  const remainingMs = Math.max(0, (endAt ?? now) - now)
  const remainingSeconds = Math.ceil(remainingMs / 1000)

  React.useEffect(() => {
    if (!running) return
    if (!endAt) return
    if (remainingMs !== 0) return

    setRunning(false)
    onComplete?.()
  }, [running, endAt, remainingMs, onComplete])

  const reset = React.useCallback(() => {
    const nextEnd = Date.now() + durationSeconds * 1000
    setEndAt(nextEnd)
    setNow(Date.now())
    setRunning(true)
  }, [durationSeconds])

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-xs text-muted-foreground">本轮倒计时</div>
        <div className="text-3xl font-semibold tabular-nums">
          {String(Math.floor(remainingSeconds / 60)).padStart(2, '0')}:
          {String(remainingSeconds % 60).padStart(2, '0')}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setRunning((v) => !v)}
          className="rounded-lg border px-3 py-2 text-sm hover:bg-black/5"
        >
          {running ? '暂停' : '继续'}
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border px-3 py-2 text-sm hover:bg-black/5"
        >
          重置
        </button>
      </div>
    </div>
  )
}
