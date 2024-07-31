import { z } from "zod";

export const ensureItIsDefined = <T>(value: T | undefined, errorMessage?: string): T => {
  if (typeof value === "undefined") {
    throw new Error(errorMessage ?? "Unexpectedly encountered undefined value!");
  }
  return value;
};

export const isUuid = (value: unknown): value is string =>
  z.string().uuid().safeParse(value).success;

export const isRecordType = (value: unknown): value is Record<string, unknown> =>
  z.record(z.any()).safeParse(value).success;
