import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/auth"])

export default convexAuthNextjsMiddleware(async (request) => {
  const isPublic: boolean = isPublicPage(request)
  const isAuthenticated: boolean = await isAuthenticatedNextjs()
  if (!isPublic && !isAuthenticated) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }
  if (isPublic && isAuthenticated) {
    return nextjsMiddlewareRedirect(request, "/");
  }
  // TODO: Redirect user away from "/auth" if authenticated
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};