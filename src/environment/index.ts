import { enumeratedLiterals, type EnumeratedLiteralsMember } from "enumerated-literals";
import { z } from "zod";

import { getEnvironmentNameUnsafe, LogLevel, EnvironmentNames } from "./constants";
import { NextEnvironment } from "./next-environment";
import { StringBooleanFlagSchema, createCommaSeparatedArraySchema } from "./util";

const environmentName = getEnvironmentNameUnsafe({
  nodeEnvironment: process.env.NODE_ENV,
  vercelEnvironment: process.env.VERCEL_ENV,
});

/* A schema that should be used in places where the value is a string that is required in
   production/development environments, but cannot be defined in a test environment for purposes
   of ensuring that behavior associated with the environment variable is not accidentally triggered
   when tests are executing. */
const TestRestricted = <T>(v: T) =>
  environmentName === EnvironmentNames.TEST ? z.literal("").optional() : v;

/* A schema that should be used in places where the value is a string that is required in
   production/development environments, but does not need to be present in test environments. */
const TestOptional = {
  local: z.string(),
  test: z.string().optional(),
  preview: z.string(),
  production: z.string(),
}[environmentName];

export const PrismaLogLevels = enumeratedLiterals(["info", "query", "warn", "error"] as const, {});
export type PrismaLogLevel = EnumeratedLiteralsMember<typeof PrismaLogLevels>;

const PrismaLogLevelSchema = createCommaSeparatedArraySchema({
  options: PrismaLogLevels.members,
  partTransformer: v => v.toLowerCase(),
});

export const environment = NextEnvironment.create(
  environmentName,
  {
    runtime: {
      /* ---------------------------- Server Environment Variables ---------------------------- */
      ANALYZE_BUNDLE: process.env.ANALYZE_BUNDLE,
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV,
      APP_NAME_FORMAL: process.env.APP_NAME_FORMAL,
      FONT_AWESOME_KIT_TOKEN: process.env.FONT_AWESOME_KIT_TOKEN,
      CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
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
      NEXT_PUBLIC_SENTRY_ENABLED: process.env.NEXT_PUBLIC_SENTRY_ENABLED,
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    validators: {
      /* ---------------------------- Server Environment Variables ---------------------------- */
      NODE_ENV: z.enum(["development", "test", "production"]),
      VERCEL_ENV: z.enum(["development", "production", "preview"]),
      ANALYZE_BUNDLE: StringBooleanFlagSchema.optional(),
      APP_NAME_FORMAL: z.string(),
      FONT_AWESOME_KIT_TOKEN: z.string(),
      CLERK_SECRET_KEY: {
        test: z.literal("").optional(),
        development: z.string().startsWith("sk_test"),
        local: z.string().startsWith("sk_test"),
        preview: z.string().startsWith("sk_test"),
        production: z.string().startsWith("sk_live"),
      }[environmentName],
      /* ~~~~~~~~~~~~~~~~~~~~~~~~~ Database Configuration ~~~~~~~~~~~~~~~~~~~~~~~~~ */
      POSTGRES_URL: TestRestricted(z.string().url().optional()),
      POSTGRES_PRISMA_URL: TestRestricted(z.string().url().optional()),
      POSTGRES_URL_NON_POOLING: TestRestricted(z.string().url().optional()),
      POSTGRES_DATABASE: TestRestricted(z.string().optional()),
      POSTGRES_PASSWORD: TestRestricted(z.string().optional()),
      POSTGRES_USER: TestRestricted(z.string().optional()),
      POSTGRES_HOST: TestRestricted(z.string().optional()),
      DATABASE_LOG_LEVEL: PrismaLogLevelSchema.optional(),
      /* ---------------------------- Client Environment Variables ---------------------------- */
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
        process.env.NODE_ENV === "test" ? z.literal("") : z.string(),
      NEXT_PUBLIC_SENTRY_ENABLED: StringBooleanFlagSchema.optional(),
      NEXT_PUBLIC_PRETTY_LOGGING: StringBooleanFlagSchema.optional(),
      NEXT_PUBLIC_LOG_LEVEL: z
        .union([
          z.literal(LogLevel.DEBUG),
          z.literal(LogLevel.ERROR),
          z.literal(LogLevel.INFO),
          z.literal(LogLevel.SILENT),
          z.literal(LogLevel.WARN),
        ] as [z.ZodLiteral<LogLevel>, z.ZodLiteral<LogLevel>, ...z.ZodLiteral<LogLevel>[]])
        .optional(),
      NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: z.string().optional(),
    },
  },
  {
    errorMessage: {
      title: `Environment Configuration Error: VERCEL_ENV='${process.env.VERCEL_ENV}' NODE_ENV='${process.env.NODE_ENV}'`,
    },
  },
);
