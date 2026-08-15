import type { Field, GlobalConfig } from 'payload'

import { adminsOnly, anyone } from '@/payload/access'
import { revalidateLayout } from '@/payload/hooks/revalidate'

const color = (name: string, label: string, defaultValue: string): Field => ({
  name,
  type: 'text',
  label,
  required: true,
  defaultValue,
  admin: { width: '33%' },
})

const size = (name: string, label: string, defaultValue: string): Field => ({
  name,
  type: 'text',
  label,
  required: true,
  defaultValue,
  admin: { width: '25%' },
})

/** Fonts loaded by next/font in the layout — the global only picks the wiring. */
const fontOptions = [
  { label: 'Playfair', value: 'playfair' },
  { label: 'Manrope', value: 'manrope' },
  { label: 'Inter', value: 'inter' },
]

/**
 * The design tokens from `lib/html/styles.css:6-59`, made editable. The layout
 * renders these as a `:root` block, so changing a value here re-colors both the
 * ported BEM CSS and any Tailwind utility that reads the same custom property.
 */
export const Theme: GlobalConfig = {
  slug: 'theme',
  label: 'Дизайн (Theme)',
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
          label: 'Өнгө',
          fields: [
            {
              type: 'row',
              fields: [
                color('primary', 'Primary', '#1465be'),
                color('primaryDark', 'Primary dark', '#10539b'),
                color('primaryLight', 'Primary light', '#3461e3'),
              ],
            },
            {
              type: 'row',
              fields: [
                color('neutral0', 'Neutral 0', '#ffffff'),
                color('neutral50', 'Neutral 50', '#fcfaf8'),
                color('neutral100', 'Neutral 100', '#f7f7f7'),
              ],
            },
            {
              type: 'row',
              fields: [
                color('neutral150', 'Neutral 150', '#f3f0e9'),
                color('neutral200', 'Neutral 200', '#e5e4e1'),
                color('neutral300', 'Neutral 300', '#d1d1d1'),
              ],
            },
            {
              type: 'row',
              fields: [
                color('neutral400', 'Neutral 400', '#7d7869'),
                color('neutral500', 'Neutral 500', '#5c584c'),
                color('neutral600', 'Neutral 600', '#2a2a2a'),
              ],
            },
            {
              type: 'row',
              fields: [
                color('neutral700', 'Neutral 700', '#1a1812'),
                color('neutral800', 'Neutral 800', '#171a20'),
                color('neutral900', 'Neutral 900', '#0d0d0d'),
              ],
            },
            {
              type: 'row',
              fields: [
                color('borderMedium', 'Border', '#d4d3cf'),
                color('accentRed', 'Accent red', '#e53935'),
                color('link', 'Link', '#3461e3'),
              ],
            },
          ],
        },
        {
          label: 'Үсгийн хэв',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'fontDisplay',
                  type: 'select',
                  label: 'Display',
                  required: true,
                  defaultValue: 'playfair',
                  options: fontOptions,
                  admin: { width: '33%' },
                },
                {
                  name: 'fontBody',
                  type: 'select',
                  label: 'Body',
                  required: true,
                  defaultValue: 'manrope',
                  options: fontOptions,
                  admin: { width: '33%' },
                },
                {
                  name: 'fontUi',
                  type: 'select',
                  label: 'UI',
                  required: true,
                  defaultValue: 'inter',
                  options: fontOptions,
                  admin: { width: '33%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                size('textDisplay', 'Display', '48px'),
                size('textH1', 'H1', '32px'),
                size('textH2', 'H2', '24px'),
                size('textH3', 'H3', '20px'),
              ],
            },
            {
              type: 'row',
              fields: [
                size('textH4', 'H4', '18px'),
                size('textBody', 'Body', '16px'),
                size('textSm', 'Small', '14px'),
                size('textCaption', 'Caption', '12px'),
              ],
            },
          ],
        },
        {
          label: 'Хэмжээ',
          fields: [
            {
              type: 'row',
              fields: [
                size('sectionPad', 'Section padding', '96px'),
                size('gutter', 'Gutter', '24px'),
                size('containerMax', 'Container max', '1360px'),
              ],
            },
            {
              type: 'row',
              fields: [
                size('radiusSm', 'Radius sm', '4px'),
                size('radiusMd', 'Radius md', '8px'),
                size('radiusLg', 'Radius lg', '12px'),
                size('radius2xl', 'Radius 2xl', '24px'),
              ],
            },
            {
              type: 'row',
              fields: [
                size('radiusFull', 'Radius full', '9999px'),
                size('paddingMd', 'Padding md', '16px'),
                size('paddingLg', 'Padding lg', '24px'),
              ],
            },
          ],
        },
      ],
    },
  ],
}
