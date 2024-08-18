import { enumeratedLiterals, type EnumeratedLiteralsMember } from "enumerated-literals";

export const NodeEnvironmentNames = enumeratedLiterals(
  ["development", "test", "production"] as const,
  {},
);

export type NodeEnvironmentName = EnumeratedLiteralsMember<typeof NodeEnvironmentNames>;

export const VercelEnvironmentNames = enumeratedLiterals(
  ["development", "preview", "production"] as const,
  {},
);

export type VercelEnvironmentName = EnumeratedLiteralsMember<typeof VercelEnvironmentNames>;

export const EnvironmentNames = enumeratedLiterals(
  ["test", "local", "production", "preview"] as const,
  {},
);

export type EnvironmentName = EnumeratedLiteralsMember<typeof EnvironmentNames>;

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

export const getEnvironmentName = ({
  nodeEnvironment,
  vercelEnvironment,
}: {
  nodeEnvironment: "test" | "development" | "production";
  vercelEnvironment?: VercelEnvironmentName;
}): EnvironmentName => {
  if (nodeEnvironment === NodeEnvironmentNames.TEST) {
    return EnvironmentNames.TEST;
  } else if (nodeEnvironment === NodeEnvironmentNames.DEVELOPMENT) {
    return EnvironmentNames.LOCAL;
  } else if (!vercelEnvironment) {
    return EnvironmentNames.PRODUCTION;
  }
  return (
    {
      development: EnvironmentNames.LOCAL,
      preview: EnvironmentNames.PREVIEW,
      production: EnvironmentNames.PRODUCTION,
    } as const
  )[vercelEnvironment];
};

export const getEnvironmentNameUnsafe = ({
  nodeEnvironment,
  vercelEnvironment,
}: {
  nodeEnvironment: "test" | "development" | "production";
  vercelEnvironment?: string;
}): EnvironmentName => {
  if (vercelEnvironment !== undefined && !VercelEnvironmentNames.contains(vercelEnvironment)) {
    throw new Error(`Detected an invalid Vercel environment key: '${vercelEnvironment}'!`);
  }
  return getEnvironmentName({ nodeEnvironment, vercelEnvironment });
};
