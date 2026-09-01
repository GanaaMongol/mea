import type { HighlightedTextBlock as HighlightedTextProps } from '@/payload-types'

export function HighlightedText({ text }: HighlightedTextProps) {
  return (
    <section className="about-content">
      <div className="about-content__inner">
        <div className="about-content__section">
          <div className="highlighted-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
