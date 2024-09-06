import { cache } from "react";

import { type Required } from "utility-types";

import { getAuthedUser } from "~/application/auth/server";
import type { UserIncludes, ApiUser, BrandUser } from "~/database/model";
import { enhance, fieldIsIncluded } from "~/database/model";
import { db } from "~/database/prisma";
import { conditionalFilters } from "~/database/util";

import {
  constructTableSearchClause,
  PAGE_SIZES,
  type FetchActionContext,
  dataInFetchContext,
  errorInFetchContext,
  type FetchActionResponse,
  type ServerSidePaginationParams,
  clampPagination,
  type UsersControls,
  type UsersFilters,
  UsersOrderingMap,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";

const filtersClause = (filters: Partial<UsersFilters>) =>
  conditionalFilters([
    filters.search ? constructTableSearchClause("user", filters.search) : undefined,
  ] as const);

const whereClause = ({ filters }: Pick<UsersControls, "filters">) => {
  const clause = filtersClause(filters);
  if (clause.length !== 0) {
    return { AND: clause };
  }
  return undefined;
};

export const fetchUsersCount = cache(
  async <C extends FetchActionContext>(
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>> => {
    const { error, isAdmin } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (!isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const count = await db.user.count({});
    return dataInFetchContext({ count }, context);
  },
) as {
  <C extends FetchActionContext>(context: C): Promise<FetchActionResponse<{ count: number }, C>>;
};

export const fetchUsersPagination = cache(
  async <C extends FetchActionContext>(
    { filters, page: _page }: Required<Pick<UsersControls, "filters" | "page">, "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>> => {
    const { isAdmin, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (!isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const count = await db.user.count({
      where: whereClause({ filters }),
    });
    return dataInFetchContext(
      clampPagination({ count, page: _page, pageSize: PAGE_SIZES.user }),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: Required<Pick<UsersControls, "filters" | "page">, "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

export const fetchUsers = cache(
  async <C extends FetchActionContext, I extends UserIncludes>(
    { filters, ordering, page: _page, includes }: UsersControls<I>,
    context: C,
  ): Promise<FetchActionResponse<ApiUser<I>[], C>> => {
    const { user, isAdmin, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (!isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    let pagination: Omit<ServerSidePaginationParams, "count"> | null = null;
    if (_page !== undefined) {
      ({ data: pagination } = await fetchUsersPagination(
        { filters, page: _page },
        { strict: true },
      ));
    }

    const users = await enhanced.user.findMany({
      where: whereClause({ filters }),
      orderBy: [
        ...UsersOrderingMap[ordering.orderBy](ordering.order),
        { createdAt: "desc" },
        { id: "desc" },
      ],
      skip: pagination ? pagination.pageSize * (pagination.page - 1) : undefined,
      take: pagination ? pagination.pageSize : undefined,
    });

    let notificationsCounts: { userId: string | null; _count: { id: number } }[] = [];
    if (fieldIsIncluded("notificationsCount", includes)) {
      notificationsCounts = await enhanced.productNotification.groupBy({
        by: ["userId"],
        _count: { id: true },
      });
    }

    let subscriptionsCounts: { userId: string | null; _count: { id: number } }[] = [];
    if (fieldIsIncluded("subscriptionsCount", includes)) {
      subscriptionsCounts = await enhanced.productSubscription.groupBy({
        by: ["userId"],
        _count: { id: true },
      });
    }

    return dataInFetchContext(
      users.map((datum: BrandUser): ApiUser<I> => {
        const d = datum as ApiUser<I>;
        return {
          ...d,
          notificationsCount: fieldIsIncluded("notificationsCount", includes)
            ? (notificationsCounts.find(n => n.userId === datum.id)?._count.id ?? 0)
            : undefined,
          subscriptionsCount: fieldIsIncluded("subscriptionsCount", includes)
            ? (subscriptionsCounts.find(n => n.userId === datum.id)?._count.id ?? 0)
            : undefined,
        };
      }),
      context,
    );
  },
) as {
  <C extends FetchActionContext, I extends UserIncludes>(
    params: UsersControls<I>,
    context: C,
  ): Promise<FetchActionResponse<ApiUser<I>[], C>>;
};
