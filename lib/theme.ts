import type { Theme } from '@/payload-types'

/**
 * Maps the `theme` global onto the CSS custom properties that
 * `app/(frontend)/styles/tokens.css` already declares. Same names, so the ported
 * BEM CSS and the Tailwind utilities both pick the new values up.
 *
 * The font *files* are loaded by next/font at build time; the global only decides
 * which loaded family each role points at.
 */
const FONT_STACKS: Record<string, string> = {
  playfair: 'var(--font-playfair), Georgia, serif',
  manrope: 'var(--font-manrope), system-ui, sans-serif',
  inter: 'var(--font-inter), system-ui, sans-serif',
}

const fontStack = (key: string | null | undefined, fallback: string) =>
  FONT_STACKS[key ?? ''] ?? FONT_STACKS[fallback]

export const buildThemeCss = (theme: Partial<Theme> | null | undefined): string => {
  if (!theme) return ''

  const declarations: Array<[string, unknown]> = [
    ['--color-primary', theme.primary],
    ['--color-primary-dark', theme.primaryDark],
    ['--color-primary-light', theme.primaryLight],
    ['--color-neutral-0', theme.neutral0],
    ['--color-neutral-50', theme.neutral50],
    ['--color-neutral-100', theme.neutral100],
    ['--color-neutral-150', theme.neutral150],
    ['--color-neutral-200', theme.neutral200],
    ['--color-neutral-300', theme.neutral300],
    ['--color-neutral-400', theme.neutral400],
    ['--color-neutral-500', theme.neutral500],
    ['--color-neutral-600', theme.neutral600],
    ['--color-neutral-700', theme.neutral700],
    ['--color-neutral-800', theme.neutral800],
    ['--color-neutral-900', theme.neutral900],
    ['--border-medium', theme.borderMedium],
    ['--color-accent-red', theme.accentRed],
    ['--color-link', theme.link],

    ['--font-display', fontStack(theme.fontDisplay, 'playfair')],
    ['--font-body', fontStack(theme.fontBody, 'manrope')],
    ['--font-ui', fontStack(theme.fontUi, 'inter')],

    ['--text-display', theme.textDisplay],
    ['--text-h1', theme.textH1],
    ['--text-h2', theme.textH2],
    ['--text-h3', theme.textH3],
    ['--text-h4', theme.textH4],
    ['--text-body', theme.textBody],
    ['--text-sm', theme.textSm],
    ['--text-caption', theme.textCaption],

    ['--section-pad', theme.sectionPad],
    ['--gutter', theme.gutter],
    ['--container-max', theme.containerMax],
    ['--radius-sm', theme.radiusSm],
    ['--radius-md', theme.radiusMd],
    ['--radius-lg', theme.radiusLg],
    ['--radius-2xl', theme.radius2xl],
    ['--radius-full', theme.radiusFull],
    ['--padding-md', theme.paddingMd],
    ['--padding-lg', theme.paddingLg],
  ]

  const body = declarations
    .filter(([, value]) => typeof value === 'string' && value.length > 0)
    // Values land inside a <style> tag, so anything that could close it goes.
    .map(([name, value]) => `${name}:${String(value).replace(/[<>{};]/g, '')};`)
    .join('')

  return body ? `:root{${body}}` : ''
}
