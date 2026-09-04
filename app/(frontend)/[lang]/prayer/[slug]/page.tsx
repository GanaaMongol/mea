import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PostArticle } from '@/components/posts/PostArticle'
import { localeAlternates, toLocale } from '@/lib/i18n'
import { getArticleBySlug } from '@/lib/queries'

// Same as `/news/[slug]`: `draftMode()` plus a `generateStaticParams`
// fallback threw `DYNAMIC_SERVER_USAGE` on every request.
export const dynamic = 'force-dynamic'

type Params = { lang: string; slug: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const prayer = await getArticleBySlug('prayers', slug, toLocale(lang))
  if (!prayer) return {}

  return {
    title: prayer.title,
    description: prayer.excerpt ?? undefined,
    alternates: localeAlternates(`/prayer/${slug}`),
  }
}

export default async function PrayerPage({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params
  const locale = toLocale(lang)
  const prayer = await getArticleBySlug('prayers', slug, locale)

  if (!prayer) notFound()

  return <PostArticle post={prayer} collection="prayers" locale={locale} />
}
