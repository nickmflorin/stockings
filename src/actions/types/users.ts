import { z } from "zod";

import type { UserIncludes } from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";
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
}

export const UsersFiltersSchemas = {
  search: z.string(),
} satisfies {
  [key in keyof UsersFilters]: z.ZodType;
};

export const UsersFiltersOptions: ParseFiltersOptions<typeof UsersFiltersSchemas> = {
  search: { defaultValue: "", excludeWhen: v => v.length === 0 },
};
