import type { Block } from 'payload'

import { PageBannerBlock } from './PageBanner/config'
import { RichTextBlock } from './RichText/config'
import { SectionTabsBlock } from './SectionTabs/config'

/**
 * Blocks available to any page-like `layout` field. Adding a block = one file
 * under `payload/blocks/<Name>/config.ts`, one line here, and one line in
 * `components/blocks/registry.ts`.
 */
export const layoutBlocks: Block[] = [PageBannerBlock, SectionTabsBlock, RichTextBlock]

export { PageBannerBlock, RichTextBlock, SectionTabsBlock }
