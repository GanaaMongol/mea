import type { VideoBlock as VideoProps } from '@/payload-types'

/** Pulls the video id out of every YouTube URL shape an editor might paste. */
export const youtubeId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com|youtube-nocookie\.com)\/watch\?(?:.*&)?v=([\w-]{6,})/i,
    /youtu\.be\/([\w-]{6,})/i,
    /(?:youtube\.com|youtube-nocookie\.com)\/(?:embed|v|shorts|live)\/([\w-]{6,})/i,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}

export function Video({ url, caption }: VideoProps) {
  const id = url ? youtubeId(url) : null

  if (!id) {
    // An unrecognised link still reaches the reader as a link rather than vanishing.
    return url ? (
      <p className="video-embed__fallback">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {caption || url}
        </a>
      </p>
    ) : null
  }

  return (
    <figure className="video-embed">
      <div className="video-embed__frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={caption || 'YouTube video'}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {caption ? <figcaption className="video-embed__caption">{caption}</figcaption> : null}
    </figure>
  )
}
