import path from 'path'
import { fileURLToPath } from 'url'

import type { CollectionConfig } from 'payload'

import { adminsOnly, anyone } from '@/payload/access'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Медиа', plural: 'Медиа' },
  access: {
    read: anyone,
    create: adminsOnly,
    update: adminsOnly,
    delete: adminsOnly,
  },
  upload: {
    // Local disk for now. Swapping in @payloadcms/storage-s3 later is a config
    // change only — no field changes — as long as nothing here assumes a path.
    staticDir: path.resolve(dirname, '../../media'),
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'thumbnail', width: 400, height: undefined, position: 'centre' },
      { name: 'card', width: 768, height: undefined, position: 'centre' },
      { name: 'wide', width: 1600, height: undefined, position: 'centre' },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      admin: { description: 'Дэлгэцийн уншигчид зориулсан тайлбар.' },
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
    },
  ],
}
