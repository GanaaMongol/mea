import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { PostArticle } from '@/components/posts/PostArticle'
import { getPostBySlug, getPostSlugs } from '@/lib/queries'

type Params = { slug: string }

export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugs('prayer')
    return slugs.map((slug) => ({ slug }))
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
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post || post.kind !== 'prayer') return {}

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  }
}

export default async function PrayerPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()
  if (post.kind !== 'prayer') redirect(`/news/${post.slug}`)

  return <PostArticle post={post} />
}
