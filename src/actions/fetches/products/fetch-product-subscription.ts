import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import { type ProductSubscription, enhance } from "~/database/model";

import {
  type FetchActionResponse,
  type FetchActionContext,
  returnErrorInFetchContext,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";
import { convertToPlainObject } from "~/api/serialization";

export const fetchProductSubcription = cache(
  async <C extends FetchActionContext>(
    id: string,
    context: C,
  ): Promise<FetchActionResponse<ProductSubscription, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return returnErrorInFetchContext<ProductSubscription, C>(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    const subscription = await enhanced.productSubscription.findUnique({
      where: { id },
      include: { statusChange: { include: { conditions: true } }, priceChange: true },
    });
    if (!subscription) {
      const error = ApiClientGlobalError.NotFound({
        message: "A subscription does not exist for the provided ID.",
      });
      return returnErrorInFetchContext<ProductSubscription, C>(error, context);
    } else if (subscription.userId !== user.id) {
      const error = ApiClientGlobalError.Forbidden({
        message: "You do not have permission to access this subscription.",
      });
      return returnErrorInFetchContext<ProductSubscription, C>(error, context);
    }
    return {
      data: convertToPlainObject(subscription),
    } as FetchActionResponse<ProductSubscription, C>;
  },
);
