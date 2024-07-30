import { enumeratedLiterals, type EnumeratedLiteralsType } from "enumerated-literals";

import { classNames } from "./classes";

export const BorderRadii = enumeratedLiterals(
  ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"] as const,
  {},
);
export type BorderRadius = EnumeratedLiteralsType<typeof BorderRadii>;

type RadiusClassNameRT<R extends BorderRadius | null | undefined> = R extends BorderRadius
  ? string
  : null;

export const radiusClassName = <R extends BorderRadius | null | undefined>(
  radius: R | null,
): RadiusClassNameRT<R> => {
  if (!radius) {
    return null as RadiusClassNameRT<R>;
  }
  return classNames({
    ["rounded-none"]: radius === BorderRadii.NONE,
    ["rounded-xs"]: radius === BorderRadii.XS,
    ["rounded-sm"]: radius === BorderRadii.SM,
    ["rounded-md"]: radius === BorderRadii.MD,
    ["rounded-lg"]: radius === BorderRadii.LG,
    ["rounded-xl"]: radius === BorderRadii.XL,
    ["rounded-2xl"]: radius === BorderRadii["2XL"],
    ["rounded-3xl"]: radius === BorderRadii["3XL"],
    ["rounded-full"]: radius === BorderRadii.FULL,
  }) as RadiusClassNameRT<R>;
};
