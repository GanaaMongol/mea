import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import type { LinkLike } from '@/lib/links'

import { getMember } from '@/lib/auth'
import { AFTER_LOGIN_PATH, LOGIN_DEFAULTS } from '@/lib/authLabels'
import { resolveHref } from '@/lib/links'
import { getAuthSettings } from '@/lib/queries'
import { LoginForm, type LoginLabels } from './LoginForm'

type Props = {
  searchParams: Promise<{ next?: string }>
}

/** `resolveHref` yields '#' for an unset link; these targets have real defaults. */
const hrefOr = (link: LinkLike | null | undefined, fallback: string): string => {
  const href = resolveHref(link)
  return href === '#' ? fallback : href
}

const safeNext = (value: string | undefined): string =>
  value?.startsWith('/') && !value.startsWith('//') ? value : AFTER_LOGIN_PATH

export async function generateMetadata(): Promise<Metadata> {
  const auth = await getAuthSettings()
  return { title: auth?.login?.title || LOGIN_DEFAULTS.title }
}

export default async function LoginPage({ searchParams }: Props) {
  const [member, auth, params] = await Promise.all([getMember(), getAuthSettings(), searchParams])

  // Already signed in — nothing to log into.
  if (member) redirect(safeNext(params.next))

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
      href: hrefOr(login?.forgotLink, '#'),
    },
    register: {
      label: login?.registerLink?.label || LOGIN_DEFAULTS.registerLabel,
      href: hrefOr(login?.registerLink, '/membership/join'),
    },
    back: {
      label: login?.backLink?.label || LOGIN_DEFAULTS.backLabel,
      href: hrefOr(login?.backLink, '/'),
    },
  }

  return <LoginForm labels={labels} next={safeNext(params.next)} />
}
