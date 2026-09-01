import Link from 'next/link'

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'mn', label: 'Монгол' },
] as const

export function LanguageSelector({ locale }: { locale: string }) {
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[1]

  return (
    <li className="lang-selector">
      <button type="button" className="lang-selector__toggle">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
        <span>{current.label}</span>
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
        {LOCALES.map(({ code, label }) => (
          <li key={code}>
            {/* /api is owned by Payload, so the locale switch lives at /lang. */}
            <Link href={`/lang/${code}`} className={code === locale ? 'is-active' : undefined}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
