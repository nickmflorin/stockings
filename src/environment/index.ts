import { z } from "zod";

import { DEFAULT_PRETTY_LOGGING, LogLevels, DEFAULT_LOG_LEVELS } from "./constants";
import { Environment } from "./Environment";
import { environmentLookup, StringBooleanFlagSchema } from "./util";

export * from "./constants";

export const environment = Environment.create(
  {
    runtime: {
      /* ---------------------------- Server Environment Variables ---------------------------- */
      ANALYZE_BUNDLE: process.env.ANALYZE_BUNDLE,
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV,
      /* ---------------------------- Client Environment Variables ---------------------------- */
      NEXT_PUBLIC_PRETTY_LOGGING: process.env.NEXT_PUBLIC_PRETTY_LOGGING,
      NEXT_PUBLIC_LOG_LEVEL: process.env.NEXT_PUBLIC_LOG_LEVEL,
      NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
    },
    validators: {
      NEXT_PUBLIC_PRETTY_LOGGING: StringBooleanFlagSchema.default(
        environmentLookup(DEFAULT_PRETTY_LOGGING),
      ),
      NEXT_PUBLIC_LOG_LEVEL: LogLevels.schema.default(environmentLookup(DEFAULT_LOG_LEVELS)),
      NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: z.string().optional(),
      NODE_ENV: z.enum(["development", "test", "production"]),
      VERCEL_ENV: z.enum(["development", "production", "preview"]),
      ANALYZE_BUNDLE: StringBooleanFlagSchema.optional(),
    },
  },
  {
    errorMessage: {
      title: `Environment Configuration Error: VERCEL_ENV='${process.env.VERCEL_ENV}' NODE_ENV='${process.env.NODE_ENV}'`,
    },
  },
);
