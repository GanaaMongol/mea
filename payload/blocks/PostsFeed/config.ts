import type { Block } from 'payload'

import { link } from '@/payload/fields/link'
import { sectionHeader } from '@/payload/fields/sectionHeader'

/**
 * The `news-grid` / `news-card` section. Appears on index.html (4 cards +
 * "Дэлгэрэнгүй"), news2.html (12 bordered cards + tab filter) and as the related
 * strip under news-detail.html.
 */
const kindOptions = [
  { label: 'Бүгд', value: 'all' },
  { label: 'Мэдээ', value: 'news' },
  { label: 'Нийтлэл', value: 'article' },
]

export const PostsFeedBlock: Block = {
  slug: 'postsFeed',
  interfaceName: 'PostsFeedBlock',
  labels: { singular: 'Мэдээний жагсаалт', plural: 'Мэдээний жагсаалт' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'plain',
      options: [
        { label: 'Энгийн (нүүр хуудас)', value: 'plain' },
        { label: 'Хүрээтэй (мэдээний жагсаалт)', value: 'bordered' },
        { label: 'Төстэй мэдээ (дэлгэрэнгүйн доод хэсэг)', value: 'related' },
      ],
    },
    sectionHeader(),
    {
      name: 'collection',
      type: 'select',
      label: 'Эх сурвалж',
      required: true,
      defaultValue: 'posts',
      options: [
        { label: 'Мэдээ & Нийтлэл', value: 'posts' },
        { label: 'Залбирал', value: 'prayers' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'source',
          type: 'select',
          required: true,
          defaultValue: 'auto',
          options: [
            { label: 'Автоматаар (сүүлийн үеийн)', value: 'auto' },
            { label: 'Гараар сонгох', value: 'manual' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'limit',
          type: 'number',
          defaultValue: 4,
          min: 1,
          max: 24,
          admin: { width: '50%', condition: (_, s) => s?.source !== 'manual' },
        },
      ],
    },
    {
      name: 'kind',
      type: 'select',
      defaultValue: 'all',
      options: kindOptions,
      admin: {
        condition: (_, s) => s?.source !== 'manual' && s?.collection !== 'prayers',
      },
    },
    {
      name: 'manual',
      type: 'relationship',
      relationTo: ['posts', 'prayers'],
      hasMany: true,
      admin: { condition: (_, s) => s?.source === 'manual' },
    },
    {
      name: 'filter',
      type: 'group',
      label: 'Шүүлтүүр',
      admin: { condition: (_, s) => s?.collection !== 'prayers' },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Харуулах',
          defaultValue: false,
        },
        {
          name: 'style',
          type: 'select',
          defaultValue: 'buttons',
          options: [
            { label: 'Товч (нүүр хуудас)', value: 'buttons' },
            { label: 'Таб (мэдээний жагсаалт)', value: 'tabs' },
          ],
          admin: { condition: (_, s) => Boolean(s?.enabled) },
        },
        {
          name: 'items',
          type: 'array',
          admin: { condition: (_, s) => Boolean(s?.enabled) },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'kind',
              type: 'select',
              required: true,
              defaultValue: 'all',
              options: kindOptions,
            },
          ],
        },
      ],
    },
    link({ name: 'moreLink', label: 'Дэлгэрэнгүй холбоос', appearance: false }),
    {
      name: 'readLabel',
      type: 'text',
      label: 'Картын товчны текст',
      defaultValue: 'Унших',
      localized: true,
    },
  ],
}
