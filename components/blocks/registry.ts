import type { ComponentType } from 'react'

import { Accelerators } from './Accelerators'
import { CardGrid } from './CardGrid'
import { Gallery } from './Gallery'
import { PageBanner } from './PageBanner'
import { PostsFeed } from './PostsFeed'
import { QuoteBanner } from './QuoteBanner'
import { RichTextBlock } from './RichText'
import { SectionTabs } from './SectionTabs'
import { ValuesList } from './ValuesList'

/**
 * blockType → component. Adding a block means: a config under
 * `payload/blocks/<Name>/config.ts`, a component under `components/blocks/<Name>`,
 * and one line here.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const blockComponents: Record<string, ComponentType<any>> = {
  pageBanner: PageBanner,
  sectionTabs: SectionTabs,
  richText: RichTextBlock,
  cardGrid: CardGrid,
  quoteBanner: QuoteBanner,
  accelerators: Accelerators,
  postsFeed: PostsFeed,
  gallery: Gallery,
  valuesList: ValuesList,
}
