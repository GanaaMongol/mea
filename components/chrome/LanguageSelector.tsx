'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LOCALES, localeHref, stripLocale, type Locale } from '@/lib/i18n'

const LABELS: Record<Locale, string> = {
  en: 'English',
  mn: 'Монгол',
}

/**
 * Switches locale in place: the reader stays on the page they were reading.
 *
 * Client-side because the chrome lives in the shared layout — a path read from
 * request headers would go stale after the first client-side navigation and the
 * switcher would start pointing at whichever page loaded first. `stripLocale`
 * makes the rewritten path (`/mn/news`) and the browser's (`/news`) agree, so
 * server and client render the same href.
 */
export function LanguageSelector({ locale }: { locale: Locale }) {
  const path = stripLocale(usePathname())

  return (
    <li className="lang-selector">
      <button type="button" className="lang-selector__toggle">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
        <span>{LABELS[locale]}</span>
        <svg
          className="lang-selector__chevron"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <ul className="lang-selector__menu">
        {LOCALES.map((code) => (
          <li key={code}>
            <Link
              href={localeHref(path, code)}
              hrefLang={code}
              className={code === locale ? 'is-active' : undefined}
            >
              {LABELS[code]}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
