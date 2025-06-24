// // middleware.ts
// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_FILE = /\.(.*)$/;
// const locales = ["en", "ar"];
// const defaultLocale = "en";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Ignore internal files and API
//   if (
//     pathname.startsWith("/api") ||
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/favicon.ico") ||
//     PUBLIC_FILE.test(pathname)
//   ) {
//     return NextResponse.next();
//   }

//   const pathnameIsMissingLocale = locales.every(
//     (locale) => !pathname.startsWith(`/${locale}`)
//   );

//   if (pathnameIsMissingLocale) {
//     const url = request.nextUrl.clone();
//     url.pathname = `/${defaultLocale}${pathname}`;
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next|api|favicon.ico).*)"],
// };
