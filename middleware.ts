import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt"],
  defaultLocale: "pt",
  localeDetection: true,
});

export const config = {
  matcher: ["/", "/:path*"],
};
