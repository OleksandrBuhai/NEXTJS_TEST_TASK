import { NextResponse } from 'next/server';

export function middleware(request) {
    const protectedRoutes = ['/dashboard', '/', '/posts/:id*']; 
    const isProtectedRoute = protectedRoutes.some(route => 
        request.nextUrl.pathname.startsWith(route)
    );
    if (isProtectedRoute) {
        const token = request.cookies.get('authToken');
        if (!token) {
            const url = request.nextUrl.clone();
            url.pathname = '/login'; 
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/', '/posts/:id*'],
};
