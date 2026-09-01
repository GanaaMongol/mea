import type { ContactBoxBlock as ContactBoxProps } from '@/payload-types'

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
)

export function ContactBox({ title, personName, personRole, phone, email }: ContactBoxProps) {
  if (!phone && !email) return null

  return (
    <section className="hub-content">
      <div className="hub-content__inner">
        <div className="contact-box">
          <div className="contact-box__header">
            <h2 className="contact-box__title">{title}</h2>
            {personName ? (
              <p className="contact-box__person">
                {personName}
                {personRole ? <span className="contact-box__role"> · {personRole}</span> : null}
              </p>
            ) : null}
          </div>
          <div className="contact-box__items">
            {phone ? (
              <a className="contact-box__item" href={`tel:${phone.replace(/[^+\d]/g, '')}`}>
                <span className="contact-box__icon">
                  <PhoneIcon />
                </span>
                <span className="contact-box__text">
                  <span className="contact-box__label">Утас</span>
                  <span className="contact-box__value">{phone}</span>
                </span>
              </a>
            ) : null}
            {email ? (
              <a className="contact-box__item" href={`mailto:${email}`}>
                <span className="contact-box__icon">
                  <MailIcon />
                </span>
                <span className="contact-box__text">
                  <span className="contact-box__label">Имэйл</span>
                  <span className="contact-box__value">{email}</span>
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
