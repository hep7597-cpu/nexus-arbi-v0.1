import type { Metadata } from 'next'
import '../globals.css'

import { SessionProvider } from 'next-auth/react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'

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
  if (!locales.includes(locale as Locale)) notFound()

  const messages = (await import(`../../i18n/messages/${locale}.json`)).default

  return (
    <html lang={locale}>
      <body>
        <SessionProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
