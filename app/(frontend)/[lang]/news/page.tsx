import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { localeAlternates, localeHref, toLocale } from '@/lib/i18n'
import { getPageBySlug } from '@/lib/queries'

// The `postsFeed` block's `?kind=` tab reads searchParams, which forces this
// route dynamic — unlike the shared `[...slug]` catch-all, which stays static
// because none of its pages use tabs.
export const dynamic = 'force-dynamic'

type Params = { lang: string }
type Search = { [key: string]: string | string[] | undefined }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const locale = toLocale((await params).lang)
  const page = await getPageBySlug('news', locale)
  if (!page) return {}

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description ?? undefined,
    alternates: localeAlternates('/news'),
  }
}

export default async function NewsPage({
  params,
  searchParams,
}: {
  params: Promise<Params>
  searchParams: Promise<Search>
}) {
  const [{ lang }, search] = await Promise.all([params, searchParams])
  const locale = toLocale(lang)
  const page = await getPageBySlug('news', locale)

  if (!page) notFound()

  const kind = typeof search.kind === 'string' ? search.kind : undefined

  return (
    <RenderBlocks
      blocks={page.layout}
      locale={locale}
      pathname={localeHref('/news', locale)}
      activeKind={kind}
    />
  )
}
