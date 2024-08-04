import path from "path";
import { fileURLToPath } from "url";

import withBundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";

/* Avoids the error: "ReferenceError: __dirname is not defined in ES module scope", which occurs if
   you refer to the __dirname global variable in an ES (ECMAScript) module.

  See: https://www.decodingweb.dev/dirname-is-not-defined-in-es-module-scope-fix */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @typedef {import('webpack').WebpackOptionsNormalized} WebpackConfig */
/** @typedef {import('next/dist/server/config-shared').WebpackConfigContext} WebpackContext */

/** @type {(config: WebpackConfig, context: WebpackContext) => WebpackConfig} */
const webpack = config => ({
  ...config,
  /* This suppresses a warning related to a seemingly unfixable bug in the OpenTelemetry
     instrumentation packages that causes NextJS to emit the following warnings:

     ../../node_modules/@prisma/instrumentation/node_modules/@opentelemetry/instrumentation/
           build/esm/platform/node/instrumentation.js
     Critical dependency: the request of a dependency is an expression

     See: https://github.com/getsentry/sentry-javascript/issues/12077 */
  ignoreWarnings: [
    ...(config.ignoreWarnings ?? []),
    (warning, { requestShortener }) => {
      const isOpenTelemetryModule =
        !!warning.module &&
        (/@opentelemetry\/instrumentation/.test(
          warning.module.readableIdentifier(requestShortener),
        ) ||
          /@prisma\/instrumentation/.test(warning.module.readableIdentifier(requestShortener)));
      const isCriticalDependencyMessage = /Critical dependency/.test(warning.message);
      return isOpenTelemetryModule && isCriticalDependencyMessage;
    },
  ],
});

/** @type {import("next").NextConfig} */
let nextConfig = {
  swcMinify: true,
  output: "standalone",
  webpack,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/dropzone",
      "@mantine/dates",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.clerk.dev",
        port: "",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/dashboard",
      permanent: false,
    },
  ],
};

if (process.env.NODE_ENV === "production") {
  if (process.env.SENTRY_ORG === undefined || process.env.SENTRY_PROJECT === undefined) {
    throw new Error("Missing required environment variables to configure Sentry!");
  }
  /* For all available Sentry options:
     https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/ */
  nextConfig = withSentryConfig(nextConfig, {
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    // Only print logs when uploading source maps in CI
    silent: !process.env.CI,
    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,
    /* Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
       It is important that this route does not match the Next.js middleware. */
    tunnelRoute: "/monitoring",
    // Hides source maps from generated client bundles
    hideSourceMaps: true,
    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
    /* Enables automatic instrumentation of Vercel Cron Monitors.  This does not yet work with
       App Router route handlers.  See the following for more information:
       - https://docs.sentry.io/product/crons/
       - https://vercel.com/docs/cron-jobs */
    automaticVercelMonitors: true,
  });
}

const bundled = (phase, { defaultConfig }) =>
  withBundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === "true" && phase === "phase-production-build",
  })({
    ...defaultConfig,
    ...nextConfig,
  });

export default bundled;
