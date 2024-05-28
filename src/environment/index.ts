import { z } from "zod";

import {
  DEFAULT_PRETTY_LOGGING,
  LogLevels,
  DEFAULT_LOG_LEVELS,
  PrismaLogLevelSchema,
} from "./constants";
import { Environment } from "./Environment";
import {
  environmentLookup,
  StringBooleanFlagSchema,
  testRestricted,
  STRICT_OMISSION,
} from "./util";

export * from "./constants";

export const environment = Environment.create(
  {
    runtime: {
      /* ---------------------------- Server Environment Variables ---------------------------- */
      ANALYZE_BUNDLE: process.env.ANALYZE_BUNDLE,
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV,
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~ Log Configuration ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      LOGFLARE_LOGGING_ENABLED: process.env.LOGFLARE_LOGGING_ENABLED,
      LOGFLARE_SOURCE_TOKEN: process.env.LOGFLARE_SOURCE_TOKEN,
      LOGFLARE_API_KEY: process.env.LOGFLARE_API_KEY,
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~ Database Configuration ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      DATABASE_LOG_LEVEL: process.env.DATABASE_LOG_LEVEL,
      POSTGRES_URL: process.env.POSTGRES_URL,
      POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
      POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
      POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
      POSTGRES_USER: process.env.POSTGRES_USER,
      POSTGRES_HOST: process.env.POSTGRES_HOST,
      /* ---------------------------- Client Environment Variables ---------------------------- */
      NEXT_PUBLIC_PRETTY_LOGGING: process.env.NEXT_PUBLIC_PRETTY_LOGGING,
      NEXT_PUBLIC_LOG_LEVEL: process.env.NEXT_PUBLIC_LOG_LEVEL,
      NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
    },
    validators: {
      /* ---------------------------- Server Environment Variables ---------------------------- */
      NODE_ENV: z.enum(["development", "test", "production"]),
      VERCEL_ENV: z.enum(["development", "production", "preview"]),
      ANALYZE_BUNDLE: StringBooleanFlagSchema.optional(),
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~ Log Configuration ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      LOGFLARE_LOGGING_ENABLED: StringBooleanFlagSchema.optional(),
      LOGFLARE_SOURCE_TOKEN: environmentLookup<
        z.ZodString | z.ZodOptional<z.ZodLiteral<"">> | z.ZodOptional<z.ZodString>
      >({
        test: STRICT_OMISSION,
        development: z.string(),
        local: z.string().optional(),
        preview: z.string(),
        production: z.string(),
      }),
      LOGFLARE_API_KEY: environmentLookup<
        z.ZodString | z.ZodOptional<z.ZodLiteral<"">> | z.ZodOptional<z.ZodString>
      >({
        test: STRICT_OMISSION,
        development: z.string(),
        local: z.string().optional(),
        preview: z.string(),
        production: z.string(),
      }),
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~ Database Configuration ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      POSTGRES_URL: testRestricted(z.string().url().optional()),
      POSTGRES_PRISMA_URL: testRestricted(z.string().url().optional()),
      POSTGRES_URL_NON_POOLING: testRestricted(z.string().url().optional()),
      POSTGRES_DATABASE: testRestricted(z.string().optional()),
      POSTGRES_PASSWORD: testRestricted(z.string().optional()),
      POSTGRES_USER: testRestricted(z.string().optional()),
      POSTGRES_HOST: testRestricted(z.string().optional()),
      DATABASE_LOG_LEVEL: PrismaLogLevelSchema.optional(),
      /* ---------------------------- Client Environment Variables ---------------------------- */
      NEXT_PUBLIC_PRETTY_LOGGING: StringBooleanFlagSchema.default(
        environmentLookup(DEFAULT_PRETTY_LOGGING),
      ),
      NEXT_PUBLIC_LOG_LEVEL: LogLevels.schema.default(environmentLookup(DEFAULT_LOG_LEVELS)),
      NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: z.string().optional(),
    },
  },
  {
    errorMessage: {
      title: `Environment Configuration Error: VERCEL_ENV='${process.env.VERCEL_ENV}' NODE_ENV='${process.env.NODE_ENV}'`,
    },
  },
);
