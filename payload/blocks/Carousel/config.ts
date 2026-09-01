import type { Block } from 'payload'

/**
 * `Img-Container` (Figma 296:2947): a centred slide with the neighbouring two
 * peeking out to the viewport edges, plus round prev/next controls.
 */
export const CarouselBlock: Block = {
  slug: 'carousel',
  interfaceName: 'CarouselBlock',
  labels: { singular: 'Зургийн цуваа', plural: 'Зургийн цуваа' },
  fields: [
    {
      name: 'slides',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Зураг', plural: 'Зургууд' },
      admin: { initCollapsed: false },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'alt', type: 'text', localized: true },
      ],
    },
  ],
}
