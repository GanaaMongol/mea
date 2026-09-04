import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { localeAlternates, localeHref, toLocale } from '@/lib/i18n'
import { getPageBySlug } from '@/lib/queries'

// `getPageBySlug`'s `draftMode()` and the shared header nav's `x-pathname`
// header read are both Dynamic APIs. With a `generateStaticParams` fallback
// (the CI build's DB is empty, so every real slug used to fall back to
// on-demand generation) that combination throws `DYNAMIC_SERVER_USAGE` —
// the same calls are harmless on `/prayer`, which has no static params to
// fall back from. `force-dynamic` sidesteps the fallback path entirely, so
// there's nothing left for `generateStaticParams` to do here.
export const dynamic = 'force-dynamic'

type Params = { lang: string; slug: string[] }

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
  // searchParams — the route is still dynamic overall, see the
  // `dynamic = 'force-dynamic'` note above.
  return (
    <RenderBlocks
      blocks={page.layout}
      locale={locale}
      pathname={localeHref(`/${slug.join('/')}`, locale)}
    />
  )
}
