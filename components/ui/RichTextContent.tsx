import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Props = {
  data: SerializedEditorState | null | undefined
  className?: string
}

/** Renders a lexical field. Returns null rather than an empty wrapper. */
export function RichTextContent({ data, className }: Props) {
  if (!data) return null
  return <RichText data={data} className={className} />
}
