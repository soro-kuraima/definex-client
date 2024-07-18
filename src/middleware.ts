import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Allow access to the portfolio page if authenticated
  if (pathname.startsWith('/portfolio') && token) {
    return NextResponse.next();
  }

  // Allow access to public routes
  if (pathname === '/' || pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Redirect to home if not authenticated and trying to access a protected route
  if (!token && pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
