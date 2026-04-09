import type { Metadata } from 'next'
import './globals.css'

import { SessionProvider } from 'next-auth/react'

export const metadata: Metadata = {
  title: 'Nexus Arbi',
  description: 'Nexus Arbi v0.1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
