import { cache } from "react";

import { db } from "~/database";
import type { Product } from "~/database/model";

import { ApiClientGlobalError } from "~/api";
import { convertToPlainObject } from "~/api/serialization";

type FetchProductOptions = {
  readonly strict?: boolean;
};

type FetchProductRT<O extends FetchProductOptions> = O extends { strict: true }
  ? Product
  : Product | null;

export const fetchProduct = cache(
  async <O extends FetchProductOptions>(id: string, options: O): Promise<FetchProductRT<O>> => {
    const product = await db.product.findUnique({ where: { id } });
    if (!product) {
      if (options.strict) {
        throw ApiClientGlobalError.NotFound({});
      }
      return null as FetchProductRT<O>;
    }
    return convertToPlainObject(product);
  },
) as {
  <O extends FetchProductOptions>(id: string, options: O): Promise<FetchProductRT<O>>;
};
