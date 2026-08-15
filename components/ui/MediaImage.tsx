import Image from 'next/image'

import type { Media } from '@/payload-types'

type Props = {
  media: number | Media | null | undefined
  className?: string
  sizes?: string
  priority?: boolean
  /** Use when the image fills a sized container instead of flowing inline. */
  fill?: boolean
  alt?: string
}

/** Narrows a Payload upload field (id | doc) down to a renderable document. */
export const asMedia = (value: number | Media | null | undefined): Media | null =>
  value && typeof value === 'object' ? value : null

export function MediaImage({ media, className, sizes, priority, fill, alt }: Props) {
  const doc = asMedia(media)
  if (!doc?.url) return null

  const altText = alt ?? doc.alt ?? ''

  if (fill) {
    return (
      <Image
        src={doc.url}
        alt={altText}
        fill
        className={className}
        sizes={sizes ?? '100vw'}
        priority={priority}
      />
    )
  }

  return (
    <Image
      src={doc.url}
      alt={altText}
      width={doc.width ?? 1600}
      height={doc.height ?? 900}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  )
}
