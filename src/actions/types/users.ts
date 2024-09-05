import { z } from "zod";

import type { UserIncludes } from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";
import { type Ordering } from "~/lib/ordering";

export const UserOrderableFields = ["createdAt", "updatedAt", "firstName", "lastName"] as const;
export type UserOrderableField = (typeof UserOrderableFields)[number];

export interface UsersFilters {
  readonly search: string;
}

export interface UsersControls<I extends UserIncludes = []> {
  readonly filters: Partial<UsersFilters>;
  readonly ordering: Ordering<UserOrderableField>;
  readonly page?: number;
  readonly includes: I;
}

export const UsersDefaultOrdering: Ordering<UserOrderableField> = {
  orderBy: "createdAt",
  order: "desc",
};

export const UsersFiltersSchemas = {
  search: z.string(),
} satisfies {
  [key in keyof UsersFilters]: z.ZodType;
};

export const UsersFiltersOptions: ParseFiltersOptions<typeof UsersFiltersSchemas> = {
  search: { defaultValue: "", excludeWhen: v => v.length === 0 },
};
