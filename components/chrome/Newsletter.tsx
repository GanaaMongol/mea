import type { SiteSetting } from '@/payload-types'

/** The `join-our__newsletter` strip that sits above the footer on every mockup. */
export function Newsletter({ newsletter }: { newsletter: SiteSetting['newsletter'] | undefined }) {
  if (!newsletter?.enabled) return null

  return (
    <div className="join-our__newsletter">
      <div className="join-our__newsletter-text">
        <h3 className="join-our__newsletter-title">{newsletter.title}</h3>
        <p className="join-our__newsletter-desc">{newsletter.description}</p>
      </div>
      <form className="join-our__newsletter-form">
        <input
          type="email"
          name="email"
          placeholder={newsletter.placeholder ?? ''}
          className="join-our__newsletter-input"
          aria-label={newsletter.title ?? 'Newsletter'}
        />
        <button type="submit" className="btn btn--primary btn--sm">
          {newsletter.buttonLabel}
        </button>
      </form>
    </div>
  )
}
