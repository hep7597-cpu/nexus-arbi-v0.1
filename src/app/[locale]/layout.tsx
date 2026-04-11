import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Nexus Arbi',
  description: 'Nexus Arbi v0.1',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'zh'

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}
