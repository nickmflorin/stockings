import { cache } from "react";

import { db } from "~/database";
import type { Product } from "~/database/model";

import { convertToPlainObject } from "~/api/serialization";

export const fetchProduct = cache(async (id: string): Promise<Product> => {
  const product = await db.product.findUniqueOrThrow({ where: { id } });
  return convertToPlainObject(product);
});
