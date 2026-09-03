import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n'

/**
 * Two jobs.
 *
 * 1. Locale routing. Every frontend route lives under `app/(frontend)/[lang]`,
 *    but Mongolian keeps clean URLs — `/news` is rewritten to `/mn/news`, so the
 *    address bar stays tidy while each locale still gets its own cache entry.
 *    `/mn/...` typed by hand redirects to the canonical unprefixed form.
 * 2. The shared chrome is a Server Component with no `usePathname`, so the path
 *    is forwarded as a header for anything that needs it server-side.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]

  // Canonical: the default locale is never spelled out in the URL.
  if (first === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || '/'
    return NextResponse.redirect(url)
  }

  const headers = new Headers(request.headers)
  headers.set('x-pathname', pathname)

  if (!isLocale(first)) {
    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url, { request: { headers } })
  }

  return NextResponse.next({ request: { headers } })
}

export const config = {
  // Skip Payload's admin/API, Next internals and static assets.
  matcher: ['/((?!admin|api|_next/static|_next/image|images|favicon.ico).*)'],
}
