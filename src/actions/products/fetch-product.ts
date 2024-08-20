import { cache } from "react";

import type { Product } from "~/database/model";
import { db } from "~/database/prisma";

import { isUuid } from "~/lib/typeguards";

import {
  dataInFetchContext,
  errorInFetchContext,
  type FetchActionContext,
  type FetchActionResponse,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";

export const fetchProduct = cache(
  async <C extends FetchActionContext>(
    id: string,
    context: C,
  ): Promise<FetchActionResponse<Product, C>> => {
    if (!isUuid(id)) {
      const err = ApiClientGlobalError.NotFound({});
      return errorInFetchContext(err, context);
    }
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
