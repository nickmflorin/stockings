import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import { type PriceChangeSubscription, enhance } from "~/database/model";

import {
  type FetchActionResponse,
  type FetchActionContext,
  returnErrorInFetchContext,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";
import { convertToPlainObject } from "~/api/serialization";

export const fetchProductPriceChangeSubcription = cache(
  async <C extends FetchActionContext>(
    id: string,
    context: C,
  ): Promise<FetchActionResponse<PriceChangeSubscription, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return returnErrorInFetchContext<PriceChangeSubscription, C>(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    const subscription = await enhanced.priceChangeSubscription.findUnique({ where: { id } });
    if (!subscription) {
      const error = ApiClientGlobalError.NotFound({
        message: "A subscription does not exist for the provided ID.",
      });
      return returnErrorInFetchContext<PriceChangeSubscription, C>(error, context);
    } else if (subscription.userId !== user.id) {
      const error = ApiClientGlobalError.Forbidden({
        message: "You do not have permission to access this subscription.",
      });
      return returnErrorInFetchContext<PriceChangeSubscription, C>(error, context);
    }
    return {
      data: convertToPlainObject(subscription),
    } as FetchActionResponse<PriceChangeSubscription, C>;
  },
);
