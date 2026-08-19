import type { Metadata } from 'next'
import { Inter, Manrope, Playfair } from 'next/font/google'
import { headers } from 'next/headers'

import type { SiteSetting, Theme } from '@/payload-types'

import { AnnouncementBar } from '@/components/chrome/AnnouncementBar'
import { Footer } from '@/components/chrome/Footer'
import { Header } from '@/components/chrome/Header'
import { Newsletter } from '@/components/chrome/Newsletter'
import { getMember } from '@/lib/auth'
import { PROFILE_DEFAULTS } from '@/lib/authLabels'
import { getPayloadClient } from '@/lib/payload'
import { buildThemeCss } from '@/lib/theme'
import './globals.css'

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
async function getChrome(): Promise<{
  settings: SiteSetting | null
  theme: Theme | null
}> {
  try {
    const payload = await getPayloadClient()
    const [settings, theme] = await Promise.all([
      payload.findGlobal({ slug: 'siteSettings', depth: 2 }),
      payload.findGlobal({ slug: 'theme' }),
    ])
    return { settings, theme }
  } catch (error) {
    console.error('[layout] Payload unavailable, rendering with static tokens:', error)
    return { settings: null, theme: null }
  }
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const [{ settings, theme }, headerList, member] = await Promise.all([
    getChrome(),
    headers(),
    getMember(),
  ])
  const pathname = headerList.get('x-pathname') ?? '/'
  const themeCss = buildThemeCss(theme)

  return (
    <html
      lang="mn"
      className={`${playfair.variable} ${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {themeCss ? (
          <style id="theme-tokens" dangerouslySetInnerHTML={{ __html: themeCss }} />
        ) : null}
      </head>
      <body>
        <AnnouncementBar announcement={settings?.announcement} locale="mn" />
        <Header
          header={settings?.header}
          pathname={pathname}
          account={
            member
              ? {
                  href: '/profile',
                  label:
                    settings?.auth?.profile?.headerLinkLabel || PROFILE_DEFAULTS.headerLinkLabel,
                }
              : null
          }
        />
        {children}
        <Newsletter newsletter={settings?.newsletter} />
        <Footer footer={settings?.footer} />
      </body>
    </html>
  )
}
