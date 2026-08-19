import type { Block } from 'payload'

import { AcceleratorsBlock } from './Accelerators/config'
import { CardGridBlock } from './CardGrid/config'
import { CarouselBlock } from './Carousel/config'
import { ContactBoxBlock } from './ContactBox/config'
import { ContactFormBlock } from './ContactForm/config'
import { CreedBlock } from './Creed/config'
import { DataTableBlock } from './DataTable/config'
import { DepartmentGridBlock } from './DepartmentGrid/config'
import { FigureBlock } from './Figure/config'
import { GalleryBlock } from './Gallery/config'
import { HighlightedTextBlock } from './HighlightedText/config'
import { HistoryGridBlock } from './HistoryGrid/config'
import { MediaCardBlock } from './MediaCard/config'
import { PageBannerBlock } from './PageBanner/config'
import { PeopleGridBlock } from './PeopleGrid/config'
import { PostsFeedBlock } from './PostsFeed/config'
import { ProcessStepsBlock } from './ProcessSteps/config'
import { RegionMapBlock } from './RegionMap/config'
import { QuoteBannerBlock } from './QuoteBanner/config'
import { RichTextBlock } from './RichText/config'
import { SectionIntroBlock } from './SectionIntro/config'
import { SectionTabsBlock } from './SectionTabs/config'
import { StatsRowBlock } from './StatsRow/config'
import { TimelineBlock } from './Timeline/config'
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
  HistoryGridBlock,
  StatsRowBlock,
  HighlightedTextBlock,
  TimelineBlock,
  CarouselBlock,
  PeopleGridBlock,
  CreedBlock,
  SectionIntroBlock,
  DataTableBlock,
  MediaCardBlock,
  DepartmentGridBlock,
  ContactBoxBlock,
  ContactFormBlock,
  ProcessStepsBlock,
  FigureBlock,
  RegionMapBlock,
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
  HistoryGridBlock,
  StatsRowBlock,
  HighlightedTextBlock,
  TimelineBlock,
  CarouselBlock,
  PeopleGridBlock,
  CreedBlock,
  SectionIntroBlock,
  DataTableBlock,
  MediaCardBlock,
  DepartmentGridBlock,
  ContactBoxBlock,
  ContactFormBlock,
  ProcessStepsBlock,
  FigureBlock,
  RegionMapBlock,
}
