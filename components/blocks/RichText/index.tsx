import type { RichTextBlock as RichTextBlockProps } from '@/payload-types'

import { SectionHeader } from '@/components/blocks/SectionHeader'
import { RichTextContent } from '@/components/ui/RichTextContent'

const BACKGROUND_CLASS: Record<string, string> = {
  white: 'section section--white',
  warm: 'section section--warm',
  none: 'about-content',
}

export function RichTextBlock({ header, content, width, background }: RichTextBlockProps) {
  /** Inside a post the body sits in the article column, with no section of its own. */
  if (background === 'article') {
    return (
      <div className="news-detail-article__body">
        <SectionHeader header={header} />
        <RichTextContent data={content} />
      </div>
    )
  }

  return (
    <section className={BACKGROUND_CLASS[background ?? 'none'] ?? 'about-content'}>
      <div className={width === 'wide' ? 'container' : 'about-content__inner'}>
        <SectionHeader header={header} />
        <div className="about-content__section">
          <RichTextContent data={content} />
        </div>
      </div>
    </section>
  )
}
