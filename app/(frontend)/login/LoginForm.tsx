'use client'

import Link from 'next/link'
import { useActionState } from 'react'

import type { LoginState } from '@/lib/actions/auth'

import { loginAction } from '@/lib/actions/auth'

export type LoginLabels = {
  title: string
  identifierLabel: string
  identifierPlaceholder: string
  passwordLabel: string
  passwordPlaceholder: string
  submitLabel: string
  pendingLabel: string
  dividerLabel: string
  resetLabel: string
  forgot: { label: string; href: string }
  register: { label: string; href: string }
  back: { label: string; href: string }
}

const initialState: LoginState = {}

/**
 * The mockup's markup, with the only interactive part it needs: the action's
 * pending state and its error message. Everything else stays server-rendered,
 * and the form still submits without JS.
 */
export function LoginForm({ labels, next }: { labels: LoginLabels; next: string }) {
  const [state, formAction, pending] = useActionState(loginAction, initialState)

  return (
    <main className="login-section">
      <div className="login-card">
        <h1 className="login-card__title">{labels.title}</h1>

        <form className="login-fields" action={formAction}>
          <input type="hidden" name="next" value={next} />

          <div className="login-field-group">
            <div className="login-field-group__inner">
              <Link href={labels.forgot.href} className="login-forgot">
                {labels.forgot.label}
              </Link>

              <div className="form-field">
                <label className="form-field__label" htmlFor="identifier">
                  {labels.identifierLabel}
                </label>
                <input
                  className="form-field__input"
                  type="text"
                  inputMode="tel"
                  id="identifier"
                  name="identifier"
                  autoComplete="username"
                  placeholder={labels.identifierPlaceholder}
                  defaultValue={state.identifier ?? ''}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-field__label" htmlFor="password">
                  {labels.passwordLabel}
                </label>
                <input
                  className="form-field__input"
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder={labels.passwordPlaceholder}
                  required
                />
              </div>

              {state.error ? (
                <p className="text-sm text-accent-red" role="alert" aria-live="polite">
                  {state.error}
                </p>
              ) : null}

              <button type="submit" className="login-submit" disabled={pending}>
                {pending ? labels.pendingLabel : labels.submitLabel}
              </button>
            </div>
          </div>

          <div className="login-actions">
            <div className="login-divider">
              <span className="login-divider__line" />
              <span className="login-divider__text">{labels.dividerLabel}</span>
              <span className="login-divider__line" />
            </div>

            <Link href={labels.register.href} className="login-register">
              {labels.register.label}
            </Link>

            <p className="login-reset">{labels.resetLabel}</p>
          </div>
        </form>
      </div>

      <Link href={labels.back.href} className="login-back">
        <span className="login-back__icon">
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5.5H1M1 5.5L5.5 1M1 5.5L5.5 10" />
          </svg>
        </span>
        {labels.back.label}
      </Link>
    </main>
  )
}
