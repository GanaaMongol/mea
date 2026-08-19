'use client'

import { useActionState, useState } from 'react'

import type { PasswordState } from '@/lib/actions/auth'

import { changePasswordAction } from '@/lib/actions/auth'

export type PasswordLabels = {
  title: string
  fieldLabel: string
  editLabel: string
  cancelLabel: string
  currentLabel: string
  newLabel: string
  confirmLabel: string
  submitLabel: string
  pendingLabel: string
}

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

const initialState: PasswordState = {}

/**
 * The mockup's read-only password row, with the "Нууц үг солих" link turned
 * into the disclosure for an inline change form. Fields reuse the login page's
 * `.form-field` styling so no new visual language appears on the page.
 */
export function PasswordSection({ labels }: { labels: PasswordLabels }) {
  const [open, setOpen] = useState(false)
  const [state, formAction, pending] = useActionState(changePasswordAction, initialState)

  // A successful change collapses the form; the confirmation stays visible.
  // Adjusted during render rather than in an effect — the new action result is
  // what makes the form close, so there is nothing to synchronise afterwards.
  const [seenSuccess, setSeenSuccess] = useState(state.success)
  if (state.success !== seenSuccess) {
    setSeenSuccess(state.success)
    if (state.success) setOpen(false)
  }

  return (
    <div className="profile-info-section">
      <div className="profile-info-section__header">
        <h3 className="profile-info-section__title">{labels.title}</h3>
        <button
          type="button"
          className="profile-edit-link cursor-pointer border-0 bg-transparent"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? labels.cancelLabel : labels.editLabel}
          <span className="profile-edit-link__icon">
            <EditIcon />
          </span>
        </button>
      </div>

      {open ? (
        <form action={formAction} className="flex max-w-[420px] flex-col gap-4">
          <div className="form-field">
            <label className="form-field__label" htmlFor="currentPassword">
              {labels.currentLabel}
            </label>
            <input
              className="form-field__input"
              type="password"
              id="currentPassword"
              name="currentPassword"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-field__label" htmlFor="newPassword">
              {labels.newLabel}
            </label>
            <input
              className="form-field__input"
              type="password"
              id="newPassword"
              name="newPassword"
              autoComplete="new-password"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-field__label" htmlFor="confirmPassword">
              {labels.confirmLabel}
            </label>
            <input
              className="form-field__input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="new-password"
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
        </form>
      ) : (
        <div className="profile-field-row">
          <div className="profile-field">
            <label className="profile-field__label">{labels.fieldLabel}</label>
            <div className="profile-field__value profile-field__value--password">••••••••</div>
          </div>
        </div>
      )}

      {state.success && !open ? (
        <p className="text-sm text-primary" role="status" aria-live="polite">
          {state.success}
        </p>
      ) : null}
    </div>
  )
}
