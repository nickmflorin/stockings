import { z } from "zod";

import type {
  ProductCategory,
  ProductStatus,
  ProductSubCategory,
  ProductIncludes,
  ProductIncludesField,
} from "~/database/model";
import {
  ProductStatuses,
  ProductSubCategories,
  ProductCategories,
  ProductIncludesFields,
} from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";
import { type Ordering } from "~/lib/ordering";

export type ProductsFilters = {
  readonly search: string;
  readonly categories: ProductCategory[];
  readonly subCategories: ProductSubCategory[];
  readonly statuses: ProductStatus[];
  readonly subscribed: boolean;
};

export type ProductsControls<I extends ProductIncludes = ProductIncludes> = {
  readonly filters: ProductsFilters;
  readonly ordering: Ordering<ProductOrderableField>;
  readonly page: number;
  readonly includes: I;
  readonly limit: number;
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

export const ProductsFiltersSchemas = {
  search: z.string(),
  subscribed: z.union([z.boolean(), z.literal("true"), z.literal("false")]).transform(value => {
    if (typeof value === "string") {
      return value === "true" ? true : false;
    }
    return value;
  }),
  subCategories: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return ProductSubCategories.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (ProductSubCategories.contains(curr) ? [...prev, curr] : prev),
      [] as ProductSubCategory[],
    );
  }),
  categories: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return ProductCategories.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (ProductCategories.contains(curr) ? [...prev, curr] : prev),
      [] as ProductCategory[],
    );
  }),
  statuses: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return ProductStatuses.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (ProductStatuses.contains(curr) ? [...prev, curr] : prev),
      [] as ProductStatus[],
    );
  }),
} satisfies {
  [key in keyof ProductsFilters]: z.ZodType;
};

export const ProductsFiltersOptions: ParseFiltersOptions<typeof ProductsFiltersSchemas> = {
  categories: { defaultValue: [], excludeWhen: v => v.length === 0 },
  subCategories: { defaultValue: [], excludeWhen: v => v.length === 0 },
  search: { defaultValue: "", excludeWhen: v => v.length === 0 },
  subscribed: { defaultValue: false, excludeWhen: v => !v },
  statuses: { defaultValue: [], excludeWhen: v => v.length === 0 },
};

export const ProductIncludesSchema = z.union([z.string(), z.array(z.string())]).transform(value => {
  if (typeof value === "string") {
    return (ProductIncludesFields.contains(value) ? [value] : []) as ProductIncludes;
  }
  return value.reduce(
    (prev, curr) => (ProductIncludesFields.contains(curr) ? [...prev, curr] : prev),
    [] as ProductIncludesField[],
  ) as ProductIncludes;
});
