import type { Block } from 'payload'

import { AcceleratorsBlock } from './Accelerators/config'
import { CardGridBlock } from './CardGrid/config'
import { GalleryBlock } from './Gallery/config'
import { PageBannerBlock } from './PageBanner/config'
import { PostsFeedBlock } from './PostsFeed/config'
import { QuoteBannerBlock } from './QuoteBanner/config'
import { RichTextBlock } from './RichText/config'
import { SectionTabsBlock } from './SectionTabs/config'
import { ValuesListBlock } from './ValuesList/config'

/**
 * Blocks available to any page-like `layout` field. Adding a block = one file
 * under `payload/blocks/<Name>/config.ts`, one line here, and one line in
 * `components/blocks/registry.ts`.
 */
export const layoutBlocks: Block[] = [
  PageBannerBlock,
  SectionTabsBlock,
  RichTextBlock,
  CardGridBlock,
  QuoteBannerBlock,
  AcceleratorsBlock,
  PostsFeedBlock,
  GalleryBlock,
  ValuesListBlock,
]

export {
  AcceleratorsBlock,
  CardGridBlock,
  GalleryBlock,
  PageBannerBlock,
  PostsFeedBlock,
  QuoteBannerBlock,
  RichTextBlock,
  SectionTabsBlock,
  ValuesListBlock,
}
