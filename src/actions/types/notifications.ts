import { z } from "zod";

import {
  type NotificationMedium,
  type NotificationState,
  type ProductNotificationType,
  NotificationMediums,
  NotificationStates,
  ProductNotificationTypes,
  type ProductNotificationIncludes,
  ProductNotificationIncludesFields,
  type ProductNotificationIncludesField,
} from "~/database/model";

import { Filters } from "~/lib/filters";
import { type Order, type Ordering } from "~/lib/ordering";
import { isUuid } from "~/lib/typeguards";

import type { ActionVisibility } from "~/actions/visibility";

export const ProductNotificationOrderableFields = ["product", "state", "user"] as const;
export type ProductNotificationOrderableField = (typeof ProductNotificationOrderableFields)[number];

export const ProductNotificationsDefaultOrdering: Ordering<"state"> = {
  orderBy: "state",
  order: "desc",
};

export const ProductNotificationsOrderingMap = {
  state: order => [{ stateAsOf: order }] as const,
  product: order => [{ product: { name: order } }] as const,
  user: order => [{ user: { lastName: order } }, { user: { firstName: order } }] as const,
} as const satisfies { [key in ProductNotificationOrderableField]: (order: Order) => unknown[] };

export interface ProductNotificationsFilters {
  readonly states: NotificationState[];
  readonly types: ProductNotificationType[];
  readonly mediums: NotificationMedium[];
  readonly products: string[];
  readonly search: string;
  readonly users: string[];
}

export interface ProductNotificationsControls<
  I extends ProductNotificationIncludes = ProductNotificationIncludes,
> {
  readonly filters: Partial<ProductNotificationsFilters>;
  readonly ordering: Ordering<ProductNotificationOrderableField>;
  readonly page?: number;
  readonly includes: I;
  readonly limit?: number;
  readonly visibility: ActionVisibility;
}

export const ProductNotificationsFiltersObj = Filters({
  search: { schema: z.string(), defaultValue: "", excludeWhen: (v: string) => v.length === 0 },
  states: {
    defaultValue: [] as NotificationState[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return NotificationStates.contains(value) ? [value] : [];
      }
      return value.reduce(
        (prev, curr) => (NotificationStates.contains(curr) ? [...prev, curr] : prev),
        [] as NotificationState[],
      );
    }),
  },
  types: {
    defaultValue: [] as ProductNotificationType[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return ProductNotificationTypes.contains(value) ? [value] : [];
      }
      return value.reduce(
        (prev, curr) => (ProductNotificationTypes.contains(curr) ? [...prev, curr] : prev),
        [] as ProductNotificationType[],
      );
    }),
  },
  mediums: {
    defaultValue: [] as NotificationMedium[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return NotificationMediums.contains(value) ? [value] : [];
      }
      return value.reduce(
        (prev, curr) => (NotificationMediums.contains(curr) ? [...prev, curr] : prev),
        [] as NotificationMedium[],
      );
    }),
  },
  products: {
    defaultValue: [] as string[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return isUuid(value) ? [value] : [];
      }
      return value.reduce((prev, curr) => (isUuid(curr) ? [...prev, curr] : prev), [] as string[]);
    }),
  },
  users: {
    defaultValue: [] as string[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return isUuid(value) ? [value] : [];
      }
      return value.reduce((prev, curr) => (isUuid(curr) ? [...prev, curr] : prev), [] as string[]);
    }),
  },
});

// Used for API Routes
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
