import type { Metadata } from 'next'
import { Inter, Manrope, Playfair } from 'next/font/google'

import type { SiteSetting, Theme } from '@/payload-types'
import type { Locale } from '@/lib/i18n'

import { AnnouncementBar } from '@/components/chrome/AnnouncementBar'
import { Footer } from '@/components/chrome/Footer'
import { Header } from '@/components/chrome/Header'
import { Newsletter } from '@/components/chrome/Newsletter'
import { getMember } from '@/lib/auth'
import { PROFILE_DEFAULTS } from '@/lib/authLabels'
import { LOCALES, localeHref, toLocale } from '@/lib/i18n'
import { getPayloadClient } from '@/lib/payload'
import { buildThemeCss } from '@/lib/theme'
import '../globals.css'

const playfair = Playfair({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MEA — Монголын Эвангелийн Эвсэл',
    template: '%s — MEA',
  },
  description:
    'Монголын Эвангелийн Эвсэл нь чуулган, үйлчлэл, байгууллагуудыг нэгтгэн, эв нэгдэлтэйгээр сайн мэдээг түгээхийн төлөө оршдог.',
}

/**
 * Chrome and design tokens both come from Payload. If the DB is unreachable the
 * page still renders: the chrome degrades to nothing and `globals.css` keeps its
 * static `:root` values as the token fallback.
 */
async function getChrome(locale: Locale): Promise<{
  settings: SiteSetting | null
  theme: Theme | null
}> {
  try {
    const payload = await getPayloadClient()
    const [settings, theme] = await Promise.all([
      payload.findGlobal({ slug: 'siteSettings', depth: 2, locale }),
      // Design tokens are numbers and colours — the same in every language.
      payload.findGlobal({ slug: 'theme' }),
    ])
    return { settings, theme }
  } catch (error) {
    console.error('[layout] Payload unavailable, rendering with static tokens:', error)
    return { settings: null, theme: null }
  }
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export default async function FrontendLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const locale = toLocale((await params).lang)
  const [{ settings, theme }, member] = await Promise.all([getChrome(locale), getMember()])
  const themeCss = buildThemeCss(theme)

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {themeCss ? (
          <style id="theme-tokens" dangerouslySetInnerHTML={{ __html: themeCss }} />
        ) : null}
      </head>
      <body>
        <AnnouncementBar announcement={settings?.announcement} locale={locale} />
        <Header
          header={settings?.header}
          locale={locale}
          account={
            member
              ? {
                  href: localeHref('/profile', locale),
                  label:
                    settings?.auth?.profile?.headerLinkLabel || PROFILE_DEFAULTS.headerLinkLabel,
                }
              : null
          }
        />
        {children}
        <Newsletter newsletter={settings?.newsletter} />
        <Footer footer={settings?.footer} locale={locale} />
      </body>
    </html>
  )
}
