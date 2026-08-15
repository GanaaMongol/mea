import type { GlobalConfig } from 'payload'

import { adminsOnly, anyone } from '@/payload/access'
import { linkFields } from '@/payload/fields/link'
import { revalidateLayout } from '@/payload/hooks/revalidate'

/**
 * The chrome that repeats on all 19 mockups: announcement bar, header nav,
 * the `join-our__newsletter` strip and the footer's five nav groups. Not blocks
 * — they are identical on every page, so they live in one global.
 */
export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
  label: 'Сайтын тохиргоо',
  admin: { group: 'Тохиргоо' },
  access: {
    read: anyone,
    update: adminsOnly,
  },
  hooks: {
    afterChange: [revalidateLayout],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Зарлалын мөр',
          fields: [
            {
              name: 'announcement',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'Харуулах',
                  defaultValue: true,
                },
                {
                  name: 'text',
                  type: 'text',
                  localized: true,
                  admin: { description: 'Жишээ: ЗАРЛАЛ: "Ээлжит бага хурал 2025.10.09-10нд УБ-д' },
                },
                {
                  name: 'cta',
                  type: 'group',
                  label: 'Холбоос',
                  fields: linkFields,
                },
                {
                  name: 'links',
                  type: 'array',
                  label: 'Баруун талын холбоосууд',
                  fields: linkFields,
                  admin: { initCollapsed: true },
                },
                {
                  name: 'showLanguageSwitcher',
                  type: 'checkbox',
                  label: 'Хэл сонгогч харуулах',
                  defaultValue: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Толгой',
          fields: [
            {
              name: 'header',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'nav',
                  type: 'array',
                  label: 'Цэс',
                  fields: linkFields,
                  admin: { initCollapsed: true },
                },
                {
                  name: 'showSearch',
                  type: 'checkbox',
                  label: 'Хайлтын товч',
                  defaultValue: true,
                },
                {
                  name: 'loginLink',
                  type: 'group',
                  label: 'Нэвтрэх товч',
                  fields: linkFields,
                },
              ],
            },
          ],
        },
        {
          label: 'Мэдээллийн захидал',
          fields: [
            {
              name: 'newsletter',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'Харуулах',
                  defaultValue: true,
                },
                { name: 'title', type: 'text', localized: true },
                { name: 'description', type: 'textarea', localized: true },
                { name: 'placeholder', type: 'text', localized: true },
                { name: 'buttonLabel', type: 'text', localized: true },
              ],
            },
          ],
        },
        {
          label: 'Хөл',
          fields: [
            {
              name: 'footer',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'topLinks',
                  type: 'array',
                  label: 'Дээд эгнээний холбоос',
                  fields: linkFields,
                  admin: { initCollapsed: true },
                },
                {
                  name: 'contact',
                  type: 'group',
                  label: 'Холбоо барих',
                  fields: [
                    { name: 'title', type: 'text', localized: true },
                    {
                      name: 'items',
                      type: 'array',
                      fields: [
                        {
                          name: 'value',
                          type: 'text',
                          required: true,
                          localized: true,
                        },
                        {
                          name: 'href',
                          type: 'text',
                          admin: { description: 'Заавал биш. Жишээ: mailto:info@mea.mn' },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'navGroups',
                  type: 'array',
                  label: 'Цэсний бүлгүүд',
                  admin: { initCollapsed: true },
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                      localized: true,
                    },
                    {
                      name: 'links',
                      type: 'array',
                      fields: linkFields,
                      admin: { initCollapsed: true },
                    },
                  ],
                },
                {
                  name: 'copyright',
                  type: 'text',
                  localized: true,
                },
                {
                  name: 'legalLinks',
                  type: 'array',
                  fields: linkFields,
                  admin: { initCollapsed: true },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
