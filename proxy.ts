import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n'

/**
 * Locale routing lives in nginx, not here: Next 16 standalone turns
 * NextResponse.rewrite() into a 307 to the client (vercel/next.js#91844),
 * so `/news` is rewritten to `/mn/news` by the reverse proxy instead.
 *
 * What is left for this proxy:
 * 1. `/mn/...` typed by hand redirects to the canonical unprefixed form —
 *    unless nginx put us there, which it flags with `x-locale-rewritten`.
 * 2. The shared chrome is a Server Component with no `usePathname`, so the
 *    path is forwarded as a header.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]
  const rewritten = request.headers.get('x-locale-rewritten') === '1'

  if (first === DEFAULT_LOCALE && !rewritten) {
    const target = (pathname.slice(DEFAULT_LOCALE.length + 1) || '/') + request.nextUrl.search
    return NextResponse.redirect(new URL(target, request.url))
  }

  const headers = new Headers(request.headers)
  headers.set('x-pathname', rewritten ? pathname.slice(DEFAULT_LOCALE.length + 1) || '/' : pathname)

  return NextResponse.next({ request: { headers } })
}

export const config = {
  matcher: ['/((?!admin|api|_next/static|_next/image|images|favicon.ico).*)'],
}