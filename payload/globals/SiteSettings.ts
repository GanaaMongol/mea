import type { GlobalConfig } from 'payload'

import { LOGIN_DEFAULTS, PROFILE_DEFAULTS } from '@/lib/authLabels'
import { adminsOnly, anyone } from '@/payload/access'
import { link, linkFields } from '@/payload/fields/link'
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
        {
          label: 'Нэвтрэх & Профайл',
          description: 'Хуудасны бүтэц кодоор тогтмол; энд зөвхөн харагдах текст, холбоос.',
          fields: [
            {
              name: 'auth',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'login',
                  type: 'group',
                  label: 'Нэвтрэх хуудас',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      defaultValue: LOGIN_DEFAULTS.title,
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'identifierLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: LOGIN_DEFAULTS.identifierLabel,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'identifierPlaceholder',
                          type: 'text',
                          localized: true,
                          defaultValue: LOGIN_DEFAULTS.identifierPlaceholder,
                          admin: {
                            width: '50%',
                            description: 'Утасны дугаар эсвэл и-мэйлээр нэвтэрч болно.',
                          },
                        },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'passwordLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: LOGIN_DEFAULTS.passwordLabel,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'passwordPlaceholder',
                          type: 'text',
                          localized: true,
                          defaultValue: LOGIN_DEFAULTS.passwordPlaceholder,
                          admin: { width: '50%' },
                        },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'submitLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: LOGIN_DEFAULTS.submitLabel,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'dividerLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: LOGIN_DEFAULTS.dividerLabel,
                          admin: { width: '50%' },
                        },
                      ],
                    },
                    link({
                      name: 'forgotLink',
                      label: 'Нууц үг мартсан холбоос',
                      appearance: false,
                    }),
                    link({ name: 'registerLink', label: 'Бүртгүүлэх холбоос', appearance: false }),
                    link({ name: 'backLink', label: 'Буцах холбоос', appearance: false }),
                  ],
                },
                {
                  name: 'profile',
                  type: 'group',
                  label: 'Профайл хуудас',
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'headerLinkLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.headerLinkLabel,
                          admin: {
                            width: '50%',
                            description: 'Нэвтэрсэн үед толгойн товч дээр гарах текст.',
                          },
                        },
                        {
                          name: 'greeting',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.greeting,
                          admin: { width: '50%', description: '{name} нь хэрэглэгчийн нэрээр солигдоно.' },
                        },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'menuAccountLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.menuAccountLabel,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'menuLogoutLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.menuLogoutLabel,
                          admin: { width: '50%' },
                        },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'panelTitle',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.panelTitle,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'editLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.editLabel,
                          admin: { width: '50%' },
                        },
                      ],
                    },
                    {
                      name: 'generalTitle',
                      type: 'text',
                      localized: true,
                      defaultValue: PROFILE_DEFAULTS.generalTitle,
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'phoneLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.phoneLabel,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'emailLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.emailLabel,
                          admin: { width: '50%' },
                        },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'passwordTitle',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.passwordTitle,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'passwordEditLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.passwordEditLabel,
                          admin: { width: '50%' },
                        },
                      ],
                    },
                    {
                      name: 'passwordFieldLabel',
                      type: 'text',
                      localized: true,
                      defaultValue: PROFILE_DEFAULTS.passwordFieldLabel,
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'passwordCurrentLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.passwordCurrentLabel,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'passwordNewLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.passwordNewLabel,
                          admin: { width: '50%' },
                        },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'passwordConfirmLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.passwordConfirmLabel,
                          admin: { width: '50%' },
                        },
                        {
                          name: 'passwordSubmitLabel',
                          type: 'text',
                          localized: true,
                          defaultValue: PROFILE_DEFAULTS.passwordSubmitLabel,
                          admin: { width: '50%' },
                        },
                      ],
                    },
                    {
                      name: 'passwordCancelLabel',
                      type: 'text',
                      localized: true,
                      defaultValue: PROFILE_DEFAULTS.passwordCancelLabel,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
