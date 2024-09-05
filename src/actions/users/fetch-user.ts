import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { fieldIsIncluded, type ApiUser, enhance, type UserIncludes } from "~/database/model";
import { db } from "~/database/prisma";

import { isUuid } from "~/lib/typeguards";

import {
  dataInFetchContext,
  errorInFetchContext,
  type FetchActionContext,
  type FetchActionResponse,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";

export const fetchUser = cache(
  async <C extends FetchActionContext, I extends UserIncludes>(
    id: string,
    { includes }: { includes: I },
    context: C,
  ): Promise<FetchActionResponse<ApiUser<I>, C>> => {
    const { error, user: authedUser, isAdmin } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (!isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }

    if (!isUuid(id)) {
      const err = ApiClientGlobalError.NotFound({});
      return errorInFetchContext(err, context);
    }
    const user = await db.user.findUnique({
      where: { id },
    });
    if (!user) {
      const err = ApiClientGlobalError.NotFound({});
      return errorInFetchContext(err, context);
    }

    const enhanced = enhance(db, { user: authedUser }, { kinds: ["delegate"] });

    let notificationsCount: number | undefined = undefined;
    if (fieldIsIncluded("notificationsCount", includes)) {
      notificationsCount = await enhanced.productNotification.count({
        where: { userId: user.id },
      });
    }

    let subscriptionsCount: number | undefined = undefined;
    if (fieldIsIncluded("subscriptionsCount", includes)) {
      subscriptionsCount = await enhanced.productSubscription.count({
        where: { userId: user.id },
      });
    }
    return dataInFetchContext(
      { ...user, subscriptionsCount, notificationsCount } as ApiUser<I>,
      context,
    );
  },
) as {
  <C extends FetchActionContext, I extends UserIncludes>(
    id: string,
    options: { includes: I },
    context: C,
  ): Promise<FetchActionResponse<ApiUser<I>, C>>;
};
