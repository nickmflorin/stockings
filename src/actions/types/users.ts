import { z } from "zod";

import { UserIncludesFields, type UserIncludes, type UserIncludesField } from "~/database/model";

import { Filters } from "~/lib/filters";
import { type Ordering, type Order } from "~/lib/ordering";

export const UserOrderableFields = ["createdAt", "updatedAt", "name"] as const;
export type UserOrderableField = (typeof UserOrderableFields)[number];

export const UsersDefaultOrdering: Ordering<UserOrderableField> = {
  orderBy: "createdAt",
  order: "desc",
};

export const UsersOrderingMap = {
  updatedAt: order => [{ updatedAt: order }] as const,
  createdAt: order => [{ createdAt: order }] as const,
  name: order => [{ lastName: order }, { firstName: order }] as const,
} as const satisfies { [key in UserOrderableField]: (order: Order) => unknown[] };

export interface UsersFilters {
  readonly search: string;
}

export interface UsersControls<I extends UserIncludes = []> {
  readonly filters: Partial<UsersFilters>;
  readonly ordering: Ordering<UserOrderableField>;
  readonly page?: number;
  readonly includes: I;
  readonly limit?: number;
  readonly visibility: "admin";
}

// Used for API Routes
export type FlattenedUserControls<I extends UserIncludes = UserIncludes> = UsersFilters &
  Ordering<UserOrderableField> & {
    readonly page: number;
    readonly includes: I;
    readonly limit: number;
  };

export const UsersFiltersObj = Filters({
  search: { schema: z.string(), defaultValue: "", excludeWhen: (v: string) => v.length === 0 },
});

// Used for API Routes
export const UserIncludesSchema = z.union([z.string(), z.array(z.string())]).transform(value => {
  if (typeof value === "string") {
    return (UserIncludesFields.contains(value) ? [value] : []) as UserIncludes;
  }
  return value.reduce(
    (prev, curr) => (UserIncludesFields.contains(curr) ? [...prev, curr] : prev),
    [] as UserIncludesField[],
  ) as UserIncludes;
});
