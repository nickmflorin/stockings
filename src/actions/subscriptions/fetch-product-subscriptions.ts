import { cache } from "react";

import { type Required } from "utility-types";

import { getAuthedUser } from "~/application/auth/server";
import type {
  ApiProductSubscription,
  User,
  ProductSubscriptionIncludes,
  ProductSubscription,
} from "~/database/model";
import { enhance, ProductSubscriptionType, fieldIsIncluded } from "~/database/model";
import { db } from "~/database/prisma";
import { conditionalFilters, constructOrSearch } from "~/database/util";

import {
  PAGE_SIZES,
  type FetchActionContext,
  type FetchActionResponse,
  errorInFetchContext,
  dataInFetchContext,
  type ServerSidePaginationParams,
  clampPagination,
  type SubscriptionsControls,
  visibilityIsAdmin,
  type ActionVisibility,
  SubscriptionsOrderingMap,
  SubscriptionsFiltersObj,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";

const filtersClause = (filters: SubscriptionsControls["filters"]) =>
  conditionalFilters([
    filters.search
      ? { product: constructOrSearch(filters.search, ["name", "code", "slug"]) }
      : undefined,
    filters.products && filters.products.length !== 0
      ? { productId: { in: filters.products } }
      : undefined,
    filters.users && filters.users.length !== 0 ? { userId: { in: filters.users } } : undefined,
    filters.types && filters.types.length !== 0
      ? { subscriptionType: { in: filters.types } }
      : undefined,
  ] as const);

const whereClause = ({
  filters,
  user,
  visibility,
}: {
  readonly filters?: SubscriptionsControls["filters"];
  readonly user: User;
  readonly visibility: ActionVisibility;
}) => {
  const clause = filters ? filtersClause(filters) : [];
  if (visibilityIsAdmin(visibility)) {
    return { AND: clause };
  } else if (clause.length !== 0) {
    return { AND: [...clause, { userId: user.id }] };
  }
  return { userId: user.id };
};

export const fetchProductSubscriptionsCount = cache(
  async <C extends FetchActionContext>(
    {
      visibility,
      filters,
    }: Required<Pick<SubscriptionsControls, "visibility" | "filters">, "visibility" | "filters">,
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>> => {
    const { user, isAdmin, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    } else if (
      !visibilityIsAdmin(visibility) &&
      SubscriptionsFiltersObj.hasFilter(filters, "users")
    ) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const count = await db.productSubscription.count({
      where: whereClause({ filters, user, visibility }),
    });
    return dataInFetchContext({ count }, context);
  },
) as {
  <C extends FetchActionContext>(
    params: Required<
      Pick<SubscriptionsControls, "visibility" | "filters">,
      "visibility" | "filters"
    >,
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>>;
};

export const fetchProductSubscriptionsPagination = cache(
  async <C extends FetchActionContext>(
    {
      filters,
      page: _page,
      visibility,
    }: Required<
      Pick<SubscriptionsControls, "page" | "filters" | "visibility">,
      "page" | "visibility"
    >,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>> => {
    const { user, isAdmin, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    } else if (
      !visibilityIsAdmin(visibility) &&
      SubscriptionsFiltersObj.hasFilter(filters, "users")
    ) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const count = await db.productSubscription.count({
      where: whereClause({ filters, user, visibility }),
    });
    return dataInFetchContext(
      clampPagination({ count, page: _page, pageSize: PAGE_SIZES.productSubscription }),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: Required<
      Pick<SubscriptionsControls, "page" | "filters" | "visibility">,
      "page" | "visibility"
    >,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

const _fetchProductSubscriptions = async <
  C extends FetchActionContext,
  I extends ProductSubscriptionIncludes,
>(
  { filters, page, ordering, includes, visibility = "public" }: SubscriptionsControls<I>,
  context: C,
): Promise<FetchActionResponse<ApiProductSubscription<I>[], C>> => {
  const { user, error, isAdmin } = await getAuthedUser();
  if (error) {
    return errorInFetchContext(error, context);
  } else if (visibilityIsAdmin(visibility) && !isAdmin) {
    const error = ApiClientGlobalError.Forbidden({
      message: "The user does not have permission to access this data.",
    });
    return errorInFetchContext(error, context);
  } else if (
    !visibilityIsAdmin(visibility) &&
    (fieldIsIncluded("user", includes) || SubscriptionsFiltersObj.hasFilter(filters, "users"))
  ) {
    const error = ApiClientGlobalError.Forbidden({
      message: "The user does not have permission to access this data.",
    });
    return errorInFetchContext(error, context);
  }

  let pagination: Pick<ServerSidePaginationParams, "page" | "pageSize"> | null = null;
  if (page) {
    /* Note: The reason that this is strict is because the checks that would otherwise throw an
       error have already been performed in this method above, so we can be confident that they
       will not throw (or at least, should not throw) in the 'fetchProductSubscriptionsPagination'
       method. */
    ({ data: pagination } = await fetchProductSubscriptionsPagination(
      { filters, page, visibility },
      { strict: true },
    ));
  }

  const enhanced = enhance(db, { user }, { kinds: ["delegate"] });
  const data = await enhanced.productSubscription.findMany({
    where: whereClause({ filters, user, visibility }),
    orderBy: [
      ...SubscriptionsOrderingMap[ordering.orderBy](ordering.order),
      { createdAt: "desc" },
      { id: "asc" },
    ],
    skip: pagination ? pagination.pageSize * (pagination.page - 1) : undefined,
    take: pagination ? pagination.pageSize : undefined,
    include: {
      product: fieldIsIncluded("product", includes),
      user: isAdmin && fieldIsIncluded("user", includes),
    },
  });

  const subscriptions = data as ProductSubscription[] as ApiProductSubscription<I>[];

  const conditions = await enhanced.statusChangeSubscriptionCondition.findMany({
    where: {
      subscriptionId: {
        in: subscriptions
          .filter(d => d.subscriptionType === ProductSubscriptionType.StatusChangeSubscription)
          .map(d => d.id),
      },
    },
  });

  let notificationsCounts: { subscriptionId: string | null; _count: { id: number } }[] = [];
  if (fieldIsIncluded("notificationsCount", includes)) {
    notificationsCounts = await enhanced.productNotification.groupBy({
      by: ["subscriptionId"],
      _count: { id: true },
    });
  }

  return dataInFetchContext(
    subscriptions.map((subscription): ApiProductSubscription<I> => {
      const sub = {
        ...subscription,
        notificationsCount: fieldIsIncluded("notificationsCount", includes)
          ? (notificationsCounts.find(n => n.subscriptionId === subscription.id)?._count.id ?? 0)
          : undefined,
      };
      if (
        subscription.subscriptionType === ProductSubscriptionType.StatusChangeSubscription &&
        fieldIsIncluded("conditions", includes)
      ) {
        return {
          ...sub,
          conditions: conditions.filter(c => c.subscriptionId === subscription.id),
        };
      }
      return sub;
    }),
    context,
  );
};

export const fetchProductSubscriptions = cache(
  _fetchProductSubscriptions,
) as typeof _fetchProductSubscriptions;
