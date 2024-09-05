import { enumeratedLiterals, type EnumeratedLiteralsMember } from "enumerated-literals";

import { type BrandUser } from "./brand";
import { type ConditionallyInclude } from "./inclusion";

export const UserIncludesFields = enumeratedLiterals(
  ["notificationsCount", "subscriptionsCount"] as const,
  {},
);
export type UserIncludesField = EnumeratedLiteralsMember<typeof UserIncludesFields>;

export type UserIncludes =
  | ["subscriptionsCount", "notificationsCount"]
  | ["notificationsCount", "subscriptionsCount"]
  | ["notificationsCount"]
  | ["subscriptionsCount"]
  | [];

export type ApiUser<I extends UserIncludes = []> = ConditionallyInclude<
  BrandUser & {
    readonly subscriptionsCount: number;
    readonly notificationsCount: number;
  },
  ["notificationsCount", "subscriptionsCount"],
  I
>;
