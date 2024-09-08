import { z } from "zod";

import type {
  ProductCategory,
  ProductStatus,
  ProductSubCategory,
  ProductIncludes,
  ProductIncludesField,
  ProductSubscriptionType,
} from "~/database/model";
import {
  ProductStatuses,
  ProductSubCategories,
  ProductCategories,
  ProductIncludesFields,
  ProductSubscriptionTypes,
} from "~/database/model";

import { Filters } from "~/lib/filters";
import { type Ordering } from "~/lib/ordering";

import { type ActionVisibility } from "./actions";

export type ProductsFilters = {
  readonly search: string;
  readonly categories: ProductCategory[];
  readonly subCategories: ProductSubCategory[];
  readonly statuses: ProductStatus[];
  readonly subscribed: boolean;
  readonly notified: boolean;
  readonly subscriptionTypes: ProductSubscriptionType[];
};

export type ProductsControls<I extends ProductIncludes = ProductIncludes> = {
  readonly filters?: Partial<ProductsFilters>;
  readonly ordering: Ordering<ProductOrderableField>;
  readonly page?: number;
  readonly includes: I;
  readonly limit?: number;
  readonly visibility: ActionVisibility;
};

export type FlattenedProductsControls<I extends ProductIncludes = ProductIncludes> =
  ProductsFilters &
    Ordering<ProductOrderableField> & {
      readonly page: number;
      readonly includes: I;
      readonly limit: number;
    };

export const ProductOrderableFields = ["name", "price"] as const;
export type ProductOrderableField = (typeof ProductOrderableFields)[number];

export const ProductsDefaultOrdering: Ordering<"name" | "price"> = {
  orderBy: "name",
  order: "asc",
};

export const ProductsFiltersObj = Filters({
  search: { schema: z.string(), defaultValue: "", excludeWhen: (v: string) => v.length === 0 },
  subscribed: {
    defaultValue: false,
    excludeWhen: v => !v,
    schema: z.union([z.boolean(), z.literal("true"), z.literal("false")]).transform(value => {
      if (typeof value === "string") {
        return value === "true" ? true : false;
      }
      return value;
    }),
  },
  notified: {
    defaultValue: false,
    excludeWhen: v => !v,
    schema: z.union([z.boolean(), z.literal("true"), z.literal("false")]).transform(value => {
      if (typeof value === "string") {
        return value === "true" ? true : false;
      }
      return value;
    }),
  },
  subscriptionTypes: {
    defaultValue: [] as ProductSubscriptionType[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return ProductSubscriptionTypes.contains(value) ? [value] : [];
      }
      return value.reduce(
        (prev, curr) => (ProductSubscriptionTypes.contains(curr) ? [...prev, curr] : prev),
        [] as ProductSubscriptionType[],
      );
    }),
  },
  subCategories: {
    defaultValue: [] as ProductSubCategory[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return ProductSubCategories.contains(value) ? [value] : [];
      }
      return value.reduce(
        (prev, curr) => (ProductSubCategories.contains(curr) ? [...prev, curr] : prev),
        [] as ProductSubCategory[],
      );
    }),
  },
  categories: {
    defaultValue: [] as ProductCategory[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return ProductCategories.contains(value) ? [value] : [];
      }
      return value.reduce(
        (prev, curr) => (ProductCategories.contains(curr) ? [...prev, curr] : prev),
        [] as ProductCategory[],
      );
    }),
  },
  statuses: {
    defaultValue: [] as ProductStatus[],
    excludeWhen: v => v.length === 0,
    schema: z.union([z.string(), z.array(z.string())]).transform(value => {
      if (typeof value === "string") {
        return ProductStatuses.contains(value) ? [value] : [];
      }
      return value.reduce(
        (prev, curr) => (ProductStatuses.contains(curr) ? [...prev, curr] : prev),
        [] as ProductStatus[],
      );
    }),
  },
});

// Used for API Routes
export const ProductIncludesSchema = z.union([z.string(), z.array(z.string())]).transform(value => {
  if (typeof value === "string") {
    return (ProductIncludesFields.contains(value) ? [value] : []) as ProductIncludes;
  }
  return value.reduce(
    (prev, curr) => (ProductIncludesFields.contains(curr) ? [...prev, curr] : prev),
    [] as ProductIncludesField[],
  ) as ProductIncludes;
});
