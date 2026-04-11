export const locales = ['zh', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'zh'

// next-intl expects a config file at the project root by default.
export const localePrefix = 'always' as const
