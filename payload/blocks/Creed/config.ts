import type { Block } from 'payload'

/**
 * `creed-parchment` (about-creed): a centred heading and lede above the creed
 * text set on a scroll illustration. Line breaks in `text` are kept as written.
 */
export const CreedBlock: Block = {
  slug: 'creed',
  interfaceName: 'CreedBlock',
  labels: { singular: 'Итгэлийн тунхаг', plural: 'Итгэлийн тунхаг' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'intro', type: 'textarea', label: 'Танилцуулга', localized: true },
    {
      name: 'background',
      type: 'upload',
      relationTo: 'media',
      label: 'Гүйлгээ цаасны зураг',
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Тунхгийн эх бичвэр (мөр таслалт хэвээр хадгалагдана)',
      required: true,
      localized: true,
    },
  ],
}
