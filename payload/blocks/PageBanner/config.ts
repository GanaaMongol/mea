import type { Block } from 'payload'

import { linkArray } from '@/payload/fields/link'

/**
 * Every mockup opens with a banner. They differ only in chrome, so the seven
 * markup variants (`hub-banner`, `vision-banner`, `dept-banner`,
 * `dept-detail-banner`, `news-banner`, `hub-region-hero`, `news-detail-hero`)
 * collapse into one block with a `variant` select.
 */
export const PageBannerBlock: Block = {
  slug: 'pageBanner',
  interfaceName: 'PageBannerBlock',
  labels: { singular: 'Хуудасны баннер', plural: 'Хуудасны баннер' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'hub',
      options: [
        { label: 'Үндсэн (hub-banner)', value: 'hub' },
        { label: 'Уриа (vision-banner)', value: 'vision' },
        { label: 'Алба (dept-banner)', value: 'dept' },
        { label: 'Албаны дэлгэрэнгүй (dept-detail-banner)', value: 'deptDetail' },
        { label: 'Мэдээ (news-banner)', value: 'news' },
        { label: 'Бүс нутаг (hub-region-hero)', value: 'region' },
        { label: 'Зөвхөн зураг (news-detail-hero)', value: 'imageOnly' },
      ],
    },
    {
      name: 'overline',
      type: 'text',
      label: 'Дээд шошго',
      localized: true,
      admin: { condition: (_, s) => s?.variant !== 'imageOnly' },
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      admin: { condition: (_, s) => s?.variant !== 'imageOnly' },
    },
    {
      name: 'subtitle',
      type: 'textarea',
      localized: true,
      admin: { condition: (_, s) => ['hub', 'news'].includes(s?.variant) },
    },
    {
      name: 'tag',
      type: 'text',
      label: 'Ангилал (news variant)',
      localized: true,
      admin: { condition: (_, s) => s?.variant === 'news' },
    },
    {
      name: 'background',
      type: 'upload',
      relationTo: 'media',
      label: 'Дэвсгэр / зураг',
    },
    {
      name: 'watermark',
      type: 'upload',
      relationTo: 'media',
      label: 'Усан тэмдэг',
      admin: { description: 'Заавал биш. Vision болон membership баннерт хэрэглэгддэг.' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'height',
          type: 'number',
          label: 'Өндөр (px)',
          admin: { width: '50%', placeholder: '540' },
        },
        {
          name: 'align',
          type: 'select',
          defaultValue: 'left',
          options: [
            { label: 'Зүүн', value: 'left' },
            { label: 'Төв', value: 'center' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'overlay',
      type: 'checkbox',
      label: 'Бараан давхарга',
      defaultValue: true,
      admin: { condition: (_, s) => s?.variant !== 'imageOnly' },
    },
    linkArray({ label: 'Товчнууд' }),
  ],
}
