import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy (Next.js 16 middleware).
 * Auth is handled server-side in each page component.
 * This proxy only validates the [lang] segment so unknown routes get a 404
 * immediately rather than falling through to a blank page.
 */
export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Redirect bare root to language selection
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/language", req.url));
  }

  // Validate language segment for course routes
  const langMatch = pathname.match(/^\/(en|nl)(\/|$)/);
  if (pathname.startsWith("/en") || pathname.startsWith("/nl")) {
    if (!langMatch) {
      return NextResponse.redirect(new URL("/language", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/en/:path*", "/nl/:path*"],
};
