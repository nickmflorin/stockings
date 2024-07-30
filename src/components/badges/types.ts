import { enumeratedLiterals, type EnumeratedLiteralsType } from "enumerated-literals";

export const BadgeSizes = enumeratedLiterals(
  ["xxxs", "xxs", "xs", "sm", "smplus", "md", "lg", "xl"] as const,
  {},
);

export type BadgeSize = EnumeratedLiteralsType<typeof BadgeSizes>;
