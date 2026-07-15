import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// In Next.js 16 "middleware" is called "proxy". next-intl's middleware factory
// still returns a compatible handler, so we export it from `proxy.ts`.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (_next, _vercel)
  // - files with an extension (e.g. favicon.ico, og images)
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
