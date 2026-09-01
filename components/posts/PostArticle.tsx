import type { Article, ArticleCollection } from '@/lib/postHref'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { PostsFeed } from '@/components/blocks/PostsFeed'
import { MediaImage } from '@/components/ui/MediaImage'
import { articleHref } from '@/lib/postHref'

/**
 * The detail template shared by `/news/[slug]` and `/prayer/[slug]`. Only the
 * related strip differs: prayers sit beside prayers, posts beside posts.
 */
export function PostArticle({
  post,
  collection,
}: {
  post: Article
  collection: ArticleCollection
}) {
  const prayer = collection === 'prayers'

  return (
    <>
      {post.cover ? (
        <section className="news-detail-hero">
          <MediaImage media={post.cover} alt={post.title} priority sizes="100vw" />
        </section>
      ) : null}

      <section className="news-detail-article">
        <div className="container news-detail-article__inner">
          <h1 className="news-detail-article__title">{post.title}</h1>
          <RenderBlocks blocks={post.layout} pathname={articleHref(post, collection)} />
        </div>
      </section>

      <PostsFeed
        blockType="postsFeed"
        variant="related"
        collection={collection}
        source="auto"
        kind="all"
        limit={4}
        readLabel="Унших"
        header={{ title: prayer ? 'Бусад залбирлууд' : 'Төстэй мэдээнүүд', align: 'left' }}
      />
    </>
  )
}
