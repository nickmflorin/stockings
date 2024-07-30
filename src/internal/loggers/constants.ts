import type * as types from "./types";
import type * as Sentry from "@sentry/nextjs";

import { type EnvironmentName, EnvironmentNames } from "~/environment";

export enum LogLevel {
  ERROR = "error",
  INFO = "info",
  WARN = "warn",
  DEBUG = "debug",
  SILENT = "silent",
}

export const isLogLevel = (v: unknown): v is LogLevel =>
  typeof v === "string" && Object.values(LogLevel).includes(v as LogLevel);

export const DEFAULT_LOG_LEVELS: { [key in EnvironmentName]: LogLevel } = {
  [EnvironmentNames.PRODUCTION]: LogLevel.INFO,
  [EnvironmentNames.TEST]: LogLevel.DEBUG,
  [EnvironmentNames.LOCAL]: LogLevel.DEBUG,
  [EnvironmentNames.PREVIEW]: LogLevel.INFO,
};

export const DEFAULT_PRETTY_LOGGING: Record<EnvironmentName, boolean> = {
  production: false,
  preview: false,
  test: true,
  local: true,
};

export const DEFAULT_LOGGING_TRANSPORTS: Record<EnvironmentName, types.NextLoggerTransport[]> = {
  production: ["sentry"],
  preview: ["sentry", "browser"],
  test: [],
  local: ["browser"],
};

// A mapping of internal log levels to Sentry's severity levels.
export const LevelSeverityLevelMap: { [key in Exclude<LogLevel, "silent">]: Sentry.SeverityLevel } =
  {
    error: "error",
    warn: "warning",
    info: "info",
    debug: "debug",
  };
