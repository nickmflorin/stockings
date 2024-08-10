import { z } from "zod";

import type * as types from "./types";

import { ProductCategory, ProductSubCategory, ProductStatus } from "~/database/model";

export const ProductJsonSchema = z.object({
  slug: z.string(),
  name: z.string().nullable().optional(),
  code: z.string().nullable().optional(),
  imageSrc: z.string().nullable().optional(),
  status: z.nativeEnum(ProductStatus).nullable().optional(),
  category: z.nativeEnum(ProductCategory),
  price: z.number().nullable().optional(),
  subCategories: z.array(z.nativeEnum(ProductSubCategory)).optional(),
  priceAsOf: z.coerce.date().nullable().optional(),
  priceLastUpdatedAt: z.coerce.date().nullable().optional(),
  statusLastUpdatedAt: z.coerce.date().nullable().optional(),
  statusAsOf: z.coerce.date().nullable().optional(),
});

export const JsonSchemas = {
  product: ProductJsonSchema,
} as const satisfies {
  [key in types.JsonifiableModel]: z.ZodObject<z.ZodRawShape>;
};
