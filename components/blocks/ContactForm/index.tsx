import type { ContactFormBlock as ContactFormProps } from '@/payload-types'

import { LOGIN_DEFAULTS } from '@/lib/authLabels'
import { FeedbackForm } from './FeedbackForm'

/**
 * Two columns: editable contact details, and the feedback form that writes to
 * the `feedback` collection. New UI with no mockup of its own, so the insides
 * are Tailwind on theme tokens — but the outer frame uses the design system's
 * `.section` / `.container`, so its width and gutters line up with every other
 * block on the page instead of running 80px wider.
 */
export function ContactForm({ title, details, form }: ContactFormProps) {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="flex flex-col items-stretch gap-[60px] lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-6">
            <h2 className="max-w-[480px] font-display text-h1 font-bold text-primary">{title}</h2>

            {details?.length ? (
              <div className="flex flex-col gap-6">
                {details.map((group, index) => (
                  <div key={group.id ?? index} className="flex flex-col gap-4">
                    <p className="max-w-[480px] font-body text-h4 font-semibold text-neutral-700">
                      {group.label}
                    </p>
                    {group.items?.map((item, itemIndex) => (
                      <div key={item.id ?? itemIndex} className="px-6">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block max-w-[480px] font-body text-sm whitespace-pre-line text-neutral-500 hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="max-w-[480px] font-body text-sm whitespace-pre-line text-neutral-500">
                            {item.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <FeedbackForm
            labels={{
              title: form?.title ?? '',
              nameLabel: form?.nameLabel ?? '',
              emailLabel: form?.emailLabel ?? '',
              phoneLabel: form?.phoneLabel ?? '',
              messageLabel: form?.messageLabel ?? '',
              submitLabel: form?.submitLabel ?? '',
              successMessage: form?.successMessage ?? '',
              pendingLabel: LOGIN_DEFAULTS.pendingLabel,
            }}
          />
        </div>
      </div>
    </section>
  )
}
