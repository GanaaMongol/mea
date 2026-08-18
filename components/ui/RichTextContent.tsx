import { RichText } from '@payloadcms/richtext-lexical/react'
import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import type { VideoBlock } from '@/payload-types'

import { Video } from '@/components/blocks/Video'

type Props = {
  data: SerializedEditorState | null | undefined
  className?: string
}

/** Blocks placed inside the editor render through their own components. */
const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    video: ({ node }: { node: { fields: VideoBlock } }) => <Video {...node.fields} />,
  },
})

/** Renders a lexical field. Returns null rather than an empty wrapper. */
export function RichTextContent({ data, className }: Props) {
  if (!data) return null
  return <RichText data={data} className={className} converters={converters} />
}
