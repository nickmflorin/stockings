import { cache } from "react";

import { db } from "~/database";
import type { Product } from "~/database/model";

import {
  dataInFetchContext,
  errorInFetchContext,
  type FetchActionContext,
  type FetchActionResponse,
} from "~/actions/types";

import { ApiClientGlobalError } from "~/api";

export const fetchProduct = cache(
  async <C extends FetchActionContext>(
    id: string,
    context: C,
  ): Promise<FetchActionResponse<Product, C>> => {
    const product = await db.product.findUnique({ where: { id } });
    if (!product) {
      const err = ApiClientGlobalError.NotFound({});
      return errorInFetchContext(err, context);
    }
    return dataInFetchContext(product, context);
  },
) as {
  <C extends FetchActionContext>(id: string, context: C): Promise<FetchActionResponse<Product, C>>;
};
