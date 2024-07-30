import { enumeratedLiterals, type EnumeratedLiteralsType } from "enumerated-literals";

export const InputSizes = enumeratedLiterals(
  ["xsmall", "small", "medium", "large", "xlarge"] as const,
  {},
);
export type InputSize = EnumeratedLiteralsType<typeof InputSizes>;

export const InputVariants = enumeratedLiterals(["primary"] as const, {});
export type InputVariant = EnumeratedLiteralsType<typeof InputVariants>;
