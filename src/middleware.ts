import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // If already localized, do nothing
  if (pathname.startsWith('/en') || pathname.startsWith('/ar')) {
    return NextResponse.next()
  }

  // Get language preference from cookie or default to 'en'
  const lang = request.cookies.get('lang')?.value || 'en'
  
  // Redirect to localized version
  const url = request.nextUrl.clone()
  url.pathname = `/${lang}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 