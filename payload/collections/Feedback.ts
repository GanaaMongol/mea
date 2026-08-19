import type { CollectionConfig } from 'payload'

import { adminsOnly } from '@/payload/access'

/**
 * Messages sent from the `contactForm` block. Public create (that is the whole
 * point of the form), admin-only read — a visitor must never be able to list
 * what other people wrote.
 */
export const Feedback: CollectionConfig = {
  slug: 'feedback',
  labels: { singular: 'Санал хүсэлт', plural: 'Санал хүсэлт' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'status', 'createdAt'],
    group: 'Хүсэлт',
  },
  access: {
    create: () => true,
    read: adminsOnly,
    update: adminsOnly,
    delete: adminsOnly,
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Нэр', required: true, admin: { width: '50%' } },
        { name: 'email', type: 'email', label: 'Имэйл', required: true, admin: { width: '50%' } },
      ],
    },
    { name: 'phone', type: 'text', label: 'Утас', required: true },
    { name: 'message', type: 'textarea', label: 'Сэтгэгдэл', required: true },
    {
      name: 'status',
      type: 'select',
      label: 'Төлөв',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'Шинэ', value: 'new' },
        { label: 'Уншсан', value: 'read' },
        { label: 'Хариулсан', value: 'answered' },
        { label: 'Архивласан', value: 'archived' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'sourceUrl',
      type: 'text',
      label: 'Илгээсэн хуудас',
      admin: { position: 'sidebar', readOnly: true },
    },
  ],
}
