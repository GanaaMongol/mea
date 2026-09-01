import type { Block } from 'payload'

import { sectionHeader } from '@/payload/fields/sectionHeader'

/** The `about-content__section` / `hub-content__inner` prose section. */
export const RichTextBlock: Block = {
  slug: 'richText',
  interfaceName: 'RichTextBlock',
  labels: { singular: 'Текст хэсэг', plural: 'Текст хэсэг' },
  fields: [
    sectionHeader(),
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'width',
          type: 'select',
          defaultValue: 'narrow',
          options: [
            { label: 'Нарийн', value: 'narrow' },
            { label: 'Өргөн', value: 'wide' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'background',
          type: 'select',
          defaultValue: 'none',
          options: [
            { label: 'Байхгүй', value: 'none' },
            { label: 'Цагаан', value: 'white' },
            { label: 'Дулаан', value: 'warm' },
            { label: 'Нийтлэлийн бие', value: 'article' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
  ],
}
