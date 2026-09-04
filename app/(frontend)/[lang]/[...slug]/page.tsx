import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { localeAlternates, localeHref, toLocale } from '@/lib/i18n'
import { getPageBySlug, getPageSlugs } from '@/lib/queries'

export const revalidate = 3600

type Params = { lang: string; slug: string[] }

// `home` and `news` have their own dynamic route (their `postsFeed` block's
// `?kind=` tab needs searchParams, which would force this whole catch-all
// dynamic too); `prayer` gets its own static route for the same separation.
// Every other page here stays static.
const DEDICATED_SLUGS = new Set(['home', 'news', 'prayer'])

export async function generateStaticParams() {
  try {
    const slugs = await getPageSlugs()
    return slugs
      .filter((slug) => !DEDICATED_SLUGS.has(slug))
      .map((slug) => ({ slug: slug.split('/') }))
  } catch {
    // The DB may not be reachable during a build; pages then render on demand.
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const path = `/${slug.join('/')}`
  const page = await getPageBySlug(slug.join('/'), toLocale(lang))
  if (!page) return {}

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description ?? undefined,
    alternates: localeAlternates(path),
  }
}

export default async function CatchAllPage({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params
  const locale = toLocale(lang)
  const page = await getPageBySlug(slug.join('/'), locale)

  if (!page) notFound()

  // No page here carries a `postsFeed` tab filter (those live on the
  // dedicated `/news` and `/prayer` routes), so this stays free of
  // searchParams and keeps its static, `revalidate`-d rendering.
  return (
    <RenderBlocks
      blocks={page.layout}
      locale={locale}
      pathname={localeHref(`/${slug.join('/')}`, locale)}
    />
  )
}
