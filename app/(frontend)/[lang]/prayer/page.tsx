import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { localeAlternates, localeHref, toLocale } from '@/lib/i18n'
import { getPageBySlug } from '@/lib/queries'

// `PostsFeed` only shows its `?kind=` tab filter for the `posts` collection,
// never for `prayers`, so this page has no dynamic API to bail on and stays
// static like the `[...slug]` catch-all.
export const revalidate = 3600

type Params = { lang: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const locale = toLocale((await params).lang)
  const page = await getPageBySlug('prayer', locale)
  if (!page) return {}

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description ?? undefined,
    alternates: localeAlternates('/prayer'),
  }
}

export default async function PrayerPage({ params }: { params: Promise<Params> }) {
  const locale = toLocale((await params).lang)
  const page = await getPageBySlug('prayer', locale)

  if (!page) notFound()

  return (
    <RenderBlocks blocks={page.layout} locale={locale} pathname={localeHref('/prayer', locale)} />
  )
}
