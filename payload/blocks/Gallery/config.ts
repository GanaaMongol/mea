import type { Block } from 'payload'

/**
 * `news-detail-article__gallery` (one large image over a row of two) and
 * `hub-carousel` (three slides on the about/hub pages).
 */
export const GalleryBlock: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  labels: { singular: 'Зургийн цомог', plural: 'Зургийн цомог' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'mosaic',
      options: [
        { label: 'Мозайк (1 том + 2 жижиг)', value: 'mosaic' },
        { label: 'Карусель', value: 'carousel' },
        { label: 'Тор', value: 'grid' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          localized: true,
        },
      ],
    },
  ],
}
