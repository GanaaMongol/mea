import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { logoutAction } from '@/lib/actions/auth'
import { getMember, memberDisplayName } from '@/lib/auth'
import { PROFILE_DEFAULTS } from '@/lib/authLabels'
import { getAuthSettings } from '@/lib/queries'

export const metadata: Metadata = {
  title: PROFILE_DEFAULTS.panelTitle,
  robots: { index: false, follow: false },
}

const UserIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const LogoutIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

const Chevron = () => (
  <svg
    width="5"
    height="10"
    viewBox="0 0 5 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.33"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 1l4 4-4 4" />
  </svg>
)

const EditIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

/**
 * The signed-in half of `/login`: reachable only with a `members` session, and
 * the one place the session can be ended. Read-only for now — the mockup's two
 * "өөрчлөх" links have no target yet.
 */
export default async function ProfilePage() {
  const member = await getMember()
  if (!member) redirect('/login?next=/profile')

  const auth = await getAuthSettings()
  const labels = { ...PROFILE_DEFAULTS, ...cleaned(auth?.profile) }
  const greeting = labels.greeting.replace('{name}', memberDisplayName(member))

  return (
    <main className="profile-section">
      <div className="profile-content">
        <h1 className="profile-greeting">{greeting}</h1>

        <div className="profile-layout">
          <nav className="profile-menu">
            <span className="profile-menu__item profile-menu__item--active">
              <span className="profile-menu__left">
                <span className="profile-menu__icon">
                  <UserIcon />
                </span>
                {labels.menuAccountLabel}
              </span>
              <span className="profile-menu__arrow">
                <Chevron />
              </span>
            </span>

            <form action={logoutAction}>
              <button type="submit" className="profile-menu__item w-full bg-transparent">
                <span className="profile-menu__left">
                  <span className="profile-menu__icon">
                    <LogoutIcon />
                  </span>
                  {labels.menuLogoutLabel}
                </span>
                <span className="profile-menu__arrow">
                  <Chevron />
                </span>
              </button>
            </form>
          </nav>

          <div className="profile-divider" />

          <div className="profile-panel">
            <div className="profile-panel__header">
              <h2 className="profile-panel__title">{labels.panelTitle}</h2>
              <span className="profile-edit-link">
                {labels.editLabel}
                <span className="profile-edit-link__icon">
                  <EditIcon />
                </span>
              </span>
            </div>

            <div className="profile-info-section">
              <h3 className="profile-info-section__title">{labels.generalTitle}</h3>
              <div className="profile-field-row">
                <div className="profile-field">
                  <label className="profile-field__label">{labels.phoneLabel}</label>
                  <div className="profile-field__value">{member.phone || '—'}</div>
                </div>
                <div className="profile-field">
                  <label className="profile-field__label">{labels.emailLabel}</label>
                  <div className="profile-field__value">{member.email}</div>
                </div>
              </div>
            </div>

            <div className="profile-panel__divider" />

            <div className="profile-info-section">
              <div className="profile-info-section__header">
                <h3 className="profile-info-section__title">{labels.passwordTitle}</h3>
                <span className="profile-edit-link">
                  {labels.passwordEditLabel}
                  <span className="profile-edit-link__icon">
                    <EditIcon />
                  </span>
                </span>
              </div>
              <div className="profile-field-row">
                <div className="profile-field">
                  <label className="profile-field__label">{labels.passwordFieldLabel}</label>
                  <div className="profile-field__value profile-field__value--password">••••••••</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

/** Empty and null fields fall back to the coded defaults, key by key. */
function cleaned(source: Record<string, unknown> | null | undefined): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [key, value] of Object.entries(source ?? {})) {
    if (typeof value === 'string' && value.trim()) result[key] = value
  }
  return result
}
