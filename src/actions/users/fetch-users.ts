import { type Required } from "utility-types";

import type { UserIncludes, ApiUser, BrandUser } from "~/database/model";
import { enhance, fieldIsIncluded } from "~/database/model";
import { db } from "~/database/prisma";
import { conditionalFilters } from "~/database/util";

import {
  constructTableSearchClause,
  PAGE_SIZES,
  type ServerSidePaginationParams,
  clampPagination,
  type UsersControls,
  type UsersFilters,
  UsersOrderingMap,
  standardFetchAction,
  type StandardFetchActionReturn,
} from "~/actions";

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

export const fetchUsersCount = standardFetchAction(
  async ({
    filters,
  }: Pick<UsersControls, "filters" | "visibility">): StandardFetchActionReturn<{
    count: number;
  }> => {
    const count = await db.user.count({ where: whereClause({ filters }) });
    return { count };
  },
  { adminOnly: true },
);

export const fetchUsersPagination = standardFetchAction(
  async ({
    filters,
    page: _page,
  }: Required<Pick<UsersControls, "filters" | "page" | "visibility">, "page" | "filters">) => {
    const count = await db.user.count({
      where: whereClause({ filters }),
    });
    return clampPagination({ count, page: _page, pageSize: PAGE_SIZES.user });
  },
  { adminOnly: true },
);

export const fetchUsers = <I extends UserIncludes>(includes: I) =>
  standardFetchAction(
    async (
      { filters, ordering, page, limit, visibility }: Omit<UsersControls<I>, "includes">,
      user,
    ): StandardFetchActionReturn<ApiUser<I>[]> => {
      const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

      let pagination: Omit<ServerSidePaginationParams, "count"> | null = null;
      if (page !== undefined) {
        ({ data: pagination } = await fetchUsersPagination(
          { filters, page, visibility },
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
        take: pagination ? pagination.pageSize : limit,
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
      return users.map((datum: BrandUser): ApiUser<I> => {
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
      });
    },
    { adminOnly: true },
  );
