import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (host === "www.roas-calculator.tech") {
    const url = request.nextUrl.clone();
    url.hostname = "roas-calculator.tech";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
