import type { Payload } from 'payload'

import { seedGlobal } from './helpers'

/**
 * Values are the literal tokens from `lib/html/styles.css:6-59`, so the seeded
 * site is pixel-identical to the mockups before anyone edits anything.
 */
export const seedTheme = async (payload: Payload) => {
  await seedGlobal(
    payload,
    'theme',
    {
      primary: '#1465be',
      primaryDark: '#10539b',
      primaryLight: '#3461e3',
      neutral0: '#ffffff',
      neutral50: '#fcfaf8',
      neutral100: '#f7f7f7',
      neutral150: '#f3f0e9',
      neutral200: '#e5e4e1',
      neutral300: '#d1d1d1',
      neutral400: '#7d7869',
      neutral500: '#5c584c',
      neutral600: '#2a2a2a',
      neutral700: '#1a1812',
      neutral800: '#171a20',
      neutral900: '#0d0d0d',
      borderMedium: '#d4d3cf',
      accentRed: '#e53935',
      link: '#3461e3',

      fontDisplay: 'playfair',
      fontBody: 'manrope',
      fontUi: 'inter',
      textDisplay: '48px',
      textH1: '32px',
      textH2: '24px',
      textH3: '20px',
      textH4: '18px',
      textBody: '16px',
      textSm: '14px',
      textCaption: '12px',

      sectionPad: '96px',
      gutter: '24px',
      containerMax: '1360px',
      radiusSm: '4px',
      radiusMd: '8px',
      radiusLg: '12px',
      radius2xl: '24px',
      radiusFull: '9999px',
      paddingMd: '16px',
      paddingLg: '24px',
    },
    (doc) => Boolean(doc?.primary),
  )

  payload.logger.info('seed: theme tokens')
}
