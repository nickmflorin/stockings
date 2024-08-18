import { enumeratedLiterals, type EnumeratedLiteralsMember } from "enumerated-literals";

export const InputSizes = enumeratedLiterals(
  ["xsmall", "small", "medium", "large", "xlarge"] as const,
  {},
);
export type InputSize = EnumeratedLiteralsMember<typeof InputSizes>;

export const InputVariants = enumeratedLiterals(["primary"] as const, {});
export type InputVariant = EnumeratedLiteralsMember<typeof InputVariants>;
