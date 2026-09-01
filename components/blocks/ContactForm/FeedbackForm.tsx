'use client'

import { useActionState } from 'react'

import type { FeedbackState } from '@/lib/actions/feedback'

import { submitFeedbackAction } from '@/lib/actions/feedback'

export type FeedbackFormLabels = {
  title: string
  nameLabel: string
  emailLabel: string
  phoneLabel: string
  messageLabel: string
  submitLabel: string
  successMessage: string
  pendingLabel: string
}

const initialState: FeedbackState = {}

/* The design marks every field required with a persimmon asterisk — the one
   colour in this section that has no token in `theme` yet. */
const Required = () => <span className="text-[#ea6225]">*</span>

const fieldClass =
  'w-full rounded-sm border border-neutral-200 bg-neutral-100 p-[10px] font-body text-sm text-neutral-700 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary'

const labelClass = 'font-body text-sm font-medium text-neutral-500'

export function FeedbackForm({ labels }: { labels: FeedbackFormLabels }) {
  const [state, formAction, pending] = useActionState(submitFeedbackAction, initialState)

  return (
    <div className="flex flex-1 flex-col justify-center gap-10 rounded-lg border border-neutral-200 bg-white p-8 shadow-[0_2px_8px_0_rgba(26,24,18,0.05)]">
      <h3 className="text-center font-display text-h2 font-bold text-neutral-700">
        {labels.title}
      </h3>

      {state.ok ? (
        <p className="font-body text-sm text-primary" role="status" aria-live="polite">
          {labels.successMessage}
        </p>
      ) : (
        <form action={formAction} className="flex flex-col gap-6">
          {/* Honeypot: off-screen for people, irresistible to bots. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="feedback-name">
              {labels.nameLabel}
              <Required />
            </label>
            <input
              className={fieldClass}
              type="text"
              id="feedback-name"
              name="name"
              autoComplete="name"
              maxLength={120}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="feedback-email">
              {labels.emailLabel}
              <Required />
            </label>
            <input
              className={fieldClass}
              type="email"
              id="feedback-email"
              name="email"
              autoComplete="email"
              maxLength={160}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="feedback-phone">
              {labels.phoneLabel}
              <Required />
            </label>
            <input
              className={fieldClass}
              type="tel"
              id="feedback-phone"
              name="phone"
              autoComplete="tel"
              maxLength={40}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="feedback-message">
              {labels.messageLabel}
              <Required />
            </label>
            <textarea
              className={`${fieldClass} h-20 resize-y`}
              id="feedback-message"
              name="message"
              maxLength={4000}
              required
            />
          </div>

          {state.error ? (
            <p className="font-body text-sm text-accent-red" role="alert" aria-live="polite">
              {state.error}
            </p>
          ) : null}

          <button type="submit" className="btn btn--primary h-10 self-start px-9 text-sm" disabled={pending}>
            {pending ? labels.pendingLabel : labels.submitLabel}
          </button>
        </form>
      )}
    </div>
  )
}
