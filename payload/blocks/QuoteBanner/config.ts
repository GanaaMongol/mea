import type { Block } from 'payload'

import { link } from '@/payload/fields/link'

/** `quote-banner` (index.html, about-vision) and `dept-detail-quote`. */
export const QuoteBannerBlock: Block = {
  slug: 'quoteBanner',
  interfaceName: 'QuoteBannerBlock',
  labels: { singular: 'Ишлэл / CTA', plural: 'Ишлэл / CTA' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'quote',
      options: [
        { label: 'Ишлэл', value: 'quote' },
        { label: 'Уриалга (CTA)', value: 'cta' },
        { label: 'Албаны ишлэл', value: 'dept' },
        { label: 'Бидний зорилт (vision-goal)', value: 'visionGoal' },
      ],
    },
    {
      name: 'overline',
      type: 'text',
      localized: true,
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'author',
      type: 'text',
      localized: true,
      admin: { condition: (_, s) => s?.variant !== 'cta' },
    },
    {
      name: 'background',
      type: 'upload',
      relationTo: 'media',
      admin: { condition: (_, s) => s?.variant !== 'visionGoal' },
    },
    {
      name: 'watermark',
      type: 'upload',
      relationTo: 'media',
      label: 'Ус тэмдэг (чимэглэл)',
      admin: { condition: (_, s) => s?.variant === 'visionGoal' },
    },
    link({ name: 'cta', label: 'Товч' }),
  ],
}
