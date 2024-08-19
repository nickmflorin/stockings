import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { type PriceChangeSubscription, enhance } from "~/database/model";
import { db } from "~/database/prisma";

import {
  type FetchActionResponse,
  type FetchActionContext,
  errorInFetchContext,
  dataInFetchContext,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";

export const fetchPriceChangeSubscription = cache(
  async <C extends FetchActionContext>(
    id: string,
    context: C,
  ): Promise<FetchActionResponse<PriceChangeSubscription, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    const subscription = await enhanced.priceChangeSubscription.findUnique({ where: { id } });
    if (!subscription) {
      const error = ApiClientGlobalError.NotFound({
        message: "A subscription does not exist for the provided ID.",
      });
      return errorInFetchContext(error, context);
    } else if (subscription.userId !== user.id) {
      const error = ApiClientGlobalError.Forbidden({
        message: "You do not have permission to access this subscription.",
      });
      return errorInFetchContext(error, context);
    }
    return dataInFetchContext(subscription, context);
  },
) as {
  <C extends FetchActionContext>(
    id: string,
    context: C,
  ): Promise<FetchActionResponse<PriceChangeSubscription, C>>;
};
