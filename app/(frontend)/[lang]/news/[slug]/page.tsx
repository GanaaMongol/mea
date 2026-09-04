import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PostArticle } from '@/components/posts/PostArticle'
import { localeAlternates, toLocale } from '@/lib/i18n'
import { getArticleBySlug } from '@/lib/queries'

// `getArticleBySlug` reads `draftMode()` and the shared header nav reads the
// `x-pathname` header — both Dynamic APIs. Combined with a
// `generateStaticParams` fallback (the CI build's DB is empty, so nothing
// prerenders) that threw `DYNAMIC_SERVER_USAGE` on every request. See
// `[lang]/[...slug]/page.tsx` for the same fix.
export const dynamic = 'force-dynamic'

type Params = { lang: string; slug: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const post = await getArticleBySlug('posts', slug, toLocale(lang))
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    alternates: localeAlternates(`/news/${slug}`),
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params
  const locale = toLocale(lang)
  const post = await getArticleBySlug('posts', slug, locale)

  if (!post) notFound()

  return <PostArticle post={post} collection="posts" locale={locale} />
}
