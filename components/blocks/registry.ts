import type { ComponentType } from 'react'

import { PageBanner } from './PageBanner'
import { RichTextBlock } from './RichText'
import { SectionTabs } from './SectionTabs'

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
}
