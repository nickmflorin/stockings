import { NextResponse } from "next/server";

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { has, redirectToSignIn, userId, orgSlug } = auth();
  if (isProtectedRoute(req)) {
    if (!userId) {
      return redirectToSignIn();
    }
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
