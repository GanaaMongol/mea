import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PostArticle } from '@/components/posts/PostArticle'
import { getArticleBySlug, getArticleSlugs } from '@/lib/queries'

export const revalidate = 3600

type Params = { slug: string }

export async function generateStaticParams() {
  try {
    const slugs = await getArticleSlugs('posts')
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
  const post = await getArticleBySlug('posts', slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = await getArticleBySlug('posts', slug)

  if (!post) notFound()

  return <PostArticle post={post} collection="posts" />
}
