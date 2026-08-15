import type { Page } from '@/payload-types'

import { blockComponents } from './registry'

type Blocks = Page['layout']

type Props = {
  blocks: Blocks
  pathname?: string
  /** Query-string state that data-driven blocks read, e.g. the news `kind` tab. */
  activeKind?: string
}

/**
 * Renders a `layout` blocks array. Unknown block types are skipped rather than
 * crashing the page — a config can ship before its component does.
 */
export function RenderBlocks({ blocks, pathname, activeKind }: Props) {
  if (!blocks?.length) return null

  return (
    <>
      {blocks.map((block, index) => {
        const Component = blockComponents[block.blockType]
        if (!Component) return null
        return (
          <Component
            key={block.id ?? index}
            {...block}
            pathname={pathname}
            activeKind={activeKind}
          />
        )
      })}
    </>
  )
}
