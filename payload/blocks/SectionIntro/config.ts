import type { Block } from 'payload'

/** `hub-region-intro` (hub-*): a centred heading with a lede under it. */
export const SectionIntroBlock: Block = {
  slug: 'sectionIntro',
  interfaceName: 'SectionIntroBlock',
  labels: { singular: 'Танилцуулга', plural: 'Танилцуулга' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true },
  ],
}
