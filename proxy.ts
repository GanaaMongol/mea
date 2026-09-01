import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * The shared chrome lives in a Server Component, so it has no `usePathname`.
 * Forwarding the path as a header lets the header nav compute its active link
 * on the server instead of shipping the whole nav to the client.
 */
export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers)
  headers.set('x-pathname', request.nextUrl.pathname)

  return NextResponse.next({ request: { headers } })
}

export const config = {
  // Skip Payload's admin/API, Next internals and static assets.
  matcher: ['/((?!admin|api|_next/static|_next/image|images|favicon.ico).*)'],
}
