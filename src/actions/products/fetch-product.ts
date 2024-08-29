import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { fieldIsIncluded, type ApiProduct, type ProductIncludes, enhance } from "~/database/model";
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
  async <C extends FetchActionContext, I extends ProductIncludes>(
    id: string,
    { includes }: { includes: I },
    context: C,
  ): Promise<FetchActionResponse<ApiProduct<I>, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }

    if (!isUuid(id)) {
      const err = ApiClientGlobalError.NotFound({});
      return errorInFetchContext(err, context);
    }
    const product = await db.product.findUnique({
      where: { id },
      include: { records: fieldIsIncluded("records", includes) },
    });
    if (!product) {
      const err = ApiClientGlobalError.NotFound({});
      return errorInFetchContext(err, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    let apiProduct = { ...product } as ApiProduct<I>;

    if (fieldIsIncluded("statusChangeSubscription", includes)) {
      /* The status change subscription is unique on the user and product, so this should only ever
         yield at most 1 result per product. */
      apiProduct = {
        ...apiProduct,
        statusChangeSubscription: await enhanced.statusChangeSubscription.findFirst({
          where: { userId: user.id, productId: product.id },
          include: { conditions: true },
        }),
      };
    }
    if (fieldIsIncluded("priceChangeSubscription", includes)) {
      /* The status change subscription is unique on the user and product, so this should only ever
         yield at most 1 result per product. */
      apiProduct = {
        ...apiProduct,
        priceChangeSubscription: await enhanced.priceChangeSubscription.findFirst({
          where: { userId: user.id, productId: product.id },
        }),
      };
    }

    return dataInFetchContext(apiProduct, context);
  },
) as {
  <C extends FetchActionContext, I extends ProductIncludes>(
    id: string,
    options: { includes: I },
    context: C,
  ): Promise<FetchActionResponse<ApiProduct<I>, C>>;
};
