import type { Block } from 'payload'

/** `org-intro-card` (organization.html): a photo panel with copy over its foot. */
export const MediaCardBlock: Block = {
  slug: 'mediaCard',
  interfaceName: 'MediaCardBlock',
  labels: { singular: 'Зурагт карт', plural: 'Зурагт карт' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
