import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import { type ApiStatusChangeSubscription, enhance } from "~/database/model";

import {
  type FetchActionResponse,
  type FetchActionContext,
  returnErrorInFetchContext,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";
import { convertToPlainObject } from "~/api/serialization";

export const fetchProductStatusChangeSubcription = cache(
  async <C extends FetchActionContext>(
    id: string,
    context: C,
  ): Promise<FetchActionResponse<ApiStatusChangeSubscription, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return returnErrorInFetchContext<ApiStatusChangeSubscription, C>(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    const subscription = await enhanced.statusChangeSubscription.findUnique({
      where: { id },
      include: {
        conditions: { orderBy: [{ createdAt: "desc" }] },
      },
    });
    if (!subscription) {
      const error = ApiClientGlobalError.NotFound({
        message: "A subscription does not exist for the provided ID.",
      });
      return returnErrorInFetchContext<ApiStatusChangeSubscription, C>(error, context);
    } else if (subscription.userId !== user.id) {
      const error = ApiClientGlobalError.Forbidden({
        message: "You do not have permission to access this subscription.",
      });
      return returnErrorInFetchContext<ApiStatusChangeSubscription, C>(error, context);
    }
    return {
      data: convertToPlainObject(subscription),
    } as FetchActionResponse<ApiStatusChangeSubscription, C>;
  },
);
