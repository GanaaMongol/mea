import type { Article, ArticleCollection } from '@/lib/postHref'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { PostsFeed } from '@/components/blocks/PostsFeed'
import { MediaImage } from '@/components/ui/MediaImage'
import { ui } from '@/lib/dictionary'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n'
import { articleHref } from '@/lib/postHref'

/**
 * The detail template shared by `/news/[slug]` and `/prayer/[slug]`. Only the
 * related strip differs: prayers sit beside prayers, posts beside posts.
 */
export function PostArticle({
  post,
  collection,
  locale = DEFAULT_LOCALE,
}: {
  post: Article
  collection: ArticleCollection
  locale?: Locale
}) {
  const prayer = collection === 'prayers'
  const t = ui(locale)

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
          <RenderBlocks
            blocks={post.layout}
            locale={locale}
            pathname={articleHref(post, collection, locale)}
          />
        </div>
      </section>

      <PostsFeed
        blockType="postsFeed"
        variant="related"
        collection={collection}
        source="auto"
        kind="all"
        limit={4}
        locale={locale}
        readLabel={t.read}
        header={{ title: prayer ? t.relatedPrayers : t.relatedPosts, align: 'left' }}
      />
    </>
  )
}
