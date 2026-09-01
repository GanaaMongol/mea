import type { Field } from 'payload'

import { layoutBlocks } from '@/payload/blocks'
import { slugField } from '@/payload/fields/slug'

/**
 * The shape shared by `posts` and `prayers`: both are dated, illustrated
 * articles assembled from layout blocks, and both render through the same
 * detail template and feed card. Only `posts` adds a `kind` on top, so extra
 * sidebar fields are spliced in right after the slug.
 */
export const articleFields = (extra: Field[] = []): Field[] => [
  {
    name: 'title',
    type: 'text',
    required: true,
    localized: true,
  },
  slugField(),
  ...extra,
  {
    name: 'publishedAt',
    type: 'date',
    label: 'Огноо',
    admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
  },
  {
    name: 'cover',
    type: 'upload',
    relationTo: 'media',
    label: 'Нүүр зураг',
  },
  {
    name: 'excerpt',
    type: 'textarea',
    localized: true,
    admin: { description: 'Жагсаалтын картад харагдана.' },
  },
  {
    name: 'layout',
    type: 'blocks',
    label: 'Нийтлэлийн хэсгүүд',
    blocks: layoutBlocks,
    admin: {
      description:
        'Нийтлэлийн бие. Текст, зургийн цомог зэргийг чирж дараалуулна.',
    },
  },
]
