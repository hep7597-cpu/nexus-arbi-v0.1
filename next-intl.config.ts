import type { NextIntlConfig } from 'next-intl'
import { defaultLocale, locales } from './src/i18n/config'

const config: NextIntlConfig = {
  locales: [...locales],
  defaultLocale,
}

export default config
