import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Only protect admin routes (but allow the login page)
  if (pathname.startsWith("/admin")) {
    // Allow access to the login page and static assets
    if (
      pathname === "/admin/login" ||
      pathname.startsWith("/admin/_next") ||
      pathname.includes("/api/")
    ) {
      return NextResponse.next();
    }

    // Check for a valid NextAuth JWT; if missing, redirect to /admin/login
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      const loginUrl = new URL("/admin/login", req.url);
      loginUrl.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
