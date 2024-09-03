import { z } from "zod";

import {
  type NotificationState,
  type ProductNotificationType,
  NotificationStates,
  ProductNotificationTypes,
  type ProductNotificationIncludes,
  ProductNotificationIncludesFields,
  type ProductNotificationIncludesField,
} from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";
import { type Ordering } from "~/lib/ordering";
import { isUuid } from "~/lib/typeguards";

export const ProductNotificationOrderableFields = ["product", "state"] as const;
export type ProductNotificationOrderableField = (typeof ProductNotificationOrderableFields)[number];

export const ProductNotificationsDefaultOrdering: Ordering<ProductNotificationOrderableField> = {
  orderBy: "state",
  order: "desc",
};

export interface ProductNotificationsFilters {
  readonly states: NotificationState[];
  readonly types: ProductNotificationType[];
  readonly products: string[];
  readonly search: string;
}

export interface ProductNotificationsControls<
  I extends ProductNotificationIncludes = ProductNotificationIncludes,
> {
  readonly filters: ProductNotificationsFilters;
  readonly ordering: Ordering<ProductNotificationOrderableField>;
  readonly page: number;
  readonly includes: I;
  readonly limit: number;
}

export const ProductNotificationsFiltersSchemas = {
  search: z.string(),
  states: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return NotificationStates.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (NotificationStates.contains(curr) ? [...prev, curr] : prev),
      [] as NotificationState[],
    );
  }),
  types: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return ProductNotificationTypes.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (ProductNotificationTypes.contains(curr) ? [...prev, curr] : prev),
      [] as ProductNotificationType[],
    );
  }),
  products: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return isUuid(value) ? [value] : [];
    }
    return value.reduce((prev, curr) => (isUuid(curr) ? [...prev, curr] : prev), [] as string[]);
  }),
} satisfies {
  [key in keyof ProductNotificationsFilters]: z.ZodType;
};

export const ProductNotificationsFiltersOptions: ParseFiltersOptions<
  typeof ProductNotificationsFiltersSchemas
> = {
  types: { defaultValue: [], excludeWhen: v => v.length === 0 },
  states: { defaultValue: [], excludeWhen: v => v.length === 0 },
  products: { defaultValue: [], excludeWhen: v => v.length === 0 },
  search: { defaultValue: "", excludeWhen: v => v.length === 0 },
};

export const ProductNotificationIncludesSchema = z
  .union([z.string(), z.array(z.string())])
  .transform(value => {
    if (typeof value === "string") {
      return (
        ProductNotificationIncludesFields.contains(value) ? [value] : []
      ) as ProductNotificationIncludesField[];
    }
    return value.reduce(
      (prev, curr) => (ProductNotificationIncludesFields.contains(curr) ? [...prev, curr] : prev),
      [] as ProductNotificationIncludesField[],
    ) as ProductNotificationIncludes;
  });
