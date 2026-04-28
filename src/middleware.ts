import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/auth")) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split("/")[1];
  const isValidLocale = locales.includes(pathnameLocale as any);

  if (!isValidLocale) {
    const newUrl = new URL(`/${defaultLocale}${pathname === "/" ? "" : pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};