import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import type { LinkLike } from '@/lib/links'

import type { Locale } from '@/lib/i18n'

import { getMember } from '@/lib/auth'
import { AFTER_LOGIN_PATH, LOGIN_DEFAULTS } from '@/lib/authLabels'
import { localeHref, toLocale } from '@/lib/i18n'
import { resolveHref } from '@/lib/links'
import { getAuthSettings } from '@/lib/queries'
import { LoginForm, type LoginLabels } from './LoginForm'

type Props = {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ next?: string }>
}

/** `resolveHref` yields '#' for an unset link; these targets have real defaults. */
const hrefOr = (
  link: LinkLike | null | undefined,
  fallback: string,
  locale: Locale,
): string => {
  const href = resolveHref(link, locale)
  return href === '#' ? localeHref(fallback, locale) : href
}

const safeNext = (value: string | undefined, locale: Locale): string =>
  value?.startsWith('/') && !value.startsWith('//')
    ? value
    : localeHref(AFTER_LOGIN_PATH, locale)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const auth = await getAuthSettings(toLocale((await params).lang))
  return { title: auth?.login?.title || LOGIN_DEFAULTS.title }
}

export default async function LoginPage({ params, searchParams }: Props) {
  const locale = toLocale((await params).lang)
  const [member, auth, search] = await Promise.all([
    getMember(),
    getAuthSettings(locale),
    searchParams,
  ])

  // Already signed in — nothing to log into.
  if (member) redirect(safeNext(search.next, locale))

  const login = auth?.login
  const labels: LoginLabels = {
    title: login?.title || LOGIN_DEFAULTS.title,
    identifierLabel: login?.identifierLabel || LOGIN_DEFAULTS.identifierLabel,
    identifierPlaceholder: login?.identifierPlaceholder || LOGIN_DEFAULTS.identifierPlaceholder,
    passwordLabel: login?.passwordLabel || LOGIN_DEFAULTS.passwordLabel,
    passwordPlaceholder: login?.passwordPlaceholder || LOGIN_DEFAULTS.passwordPlaceholder,
    submitLabel: login?.submitLabel || LOGIN_DEFAULTS.submitLabel,
    pendingLabel: LOGIN_DEFAULTS.pendingLabel,
    dividerLabel: login?.dividerLabel || LOGIN_DEFAULTS.dividerLabel,
    forgot: {
      label: login?.forgotLink?.label || LOGIN_DEFAULTS.forgotLabel,
      href: hrefOr(login?.forgotLink, '#', locale),
    },
    register: {
      label: login?.registerLink?.label || LOGIN_DEFAULTS.registerLabel,
      href: hrefOr(login?.registerLink, '/membership/join', locale),
    },
    back: {
      label: login?.backLink?.label || LOGIN_DEFAULTS.backLabel,
      href: hrefOr(login?.backLink, '/', locale),
    },
  }

  return <LoginForm labels={labels} next={safeNext(search.next, locale)} />
}
