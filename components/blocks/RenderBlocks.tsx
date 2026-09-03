import type { Page } from '@/payload-types'
import type { Locale } from '@/lib/i18n'

import { blockComponents } from './registry'

type Blocks = Page['layout']

type Props = {
  blocks: Blocks
  /** Every block gets it: data-driven ones query with it, linking ones prefix with it. */
  locale?: Locale
  pathname?: string
  /** Query-string state that data-driven blocks read, e.g. the news `kind` tab. */
  activeKind?: string
}

/**
 * Renders a `layout` blocks array. Unknown block types are skipped rather than
 * crashing the page — a config can ship before its component does.
 */
export function RenderBlocks({ blocks, locale, pathname, activeKind }: Props) {
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
            locale={locale}
            pathname={pathname}
            activeKind={activeKind}
          />
        )
      })}
    </>
  )
}
