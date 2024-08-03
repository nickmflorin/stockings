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
  subCategories: z.array(z.nativeEnum(ProductSubCategory)).optional(),
});

export const JsonSchemas = {
  product: ProductJsonSchema,
} as const satisfies {
  [key in types.JsonifiableModel]: z.ZodObject<z.ZodRawShape>;
};
