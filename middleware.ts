// export { auth as middleware } from "@/auth"

const key = new TextEncoder().encode(process.env.SESSION_SECRET);

import { NextRequest, NextResponse } from 'next/server'
import { decryptJWT, verifySession } from '@/lib/session'
 
// const publicRoutes = ['/login', '/signup', '/']

export default async function middleware(req: NextRequest) {
    // 1. Specify protected and public routes
    const protectedRoutes = ['/dashboard']
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));

//   const isPublicRoute = publicRoutes.includes(path)
 
    if (isProtectedRoute) {
        try {
            await verifySession()
        } catch (error) {
            console.error('Error in middleware:', error);
            return NextResponse.redirect(new URL('/', req.nextUrl.origin).toString());
            
        }

        return NextResponse.next();
    }

    return NextResponse.next();
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}