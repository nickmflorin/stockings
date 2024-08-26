import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import type { Notification, User } from "~/database/model";
import { enhance } from "~/database/model";
import { db } from "~/database/prisma";
import { conditionalFilters } from "~/database/util";

import {
  PAGE_SIZES,
  type FetchActionContext,
  type FetchActionResponse,
  type ServerSidePaginationParams,
  errorInFetchContext,
  dataInFetchContext,
  clampPagination,
  type NotificationsControls,
} from "~/actions";

const filtersClause = (filters: Partial<NotificationsControls["filters"]>) =>
  conditionalFilters([
    filters.states && filters.states.length !== 0 ? { state: { in: filters.states } } : undefined,
    filters.types && filters.types.length !== 0
      ? { notificationType: { in: filters.types } }
      : undefined,
  ] as const);

const whereClause = ({
  filters,
  user,
}: Pick<NotificationsControls, "filters"> & { readonly user: User }) => {
  const clause = filtersClause(filters);
  if (clause.length !== 0) {
    return { AND: [...clause, { userId: user.id }] };
  }
  return { userId: user.id };
};

export const fetchNotificationsCount = cache(
  async <C extends FetchActionContext>(
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }
    const count = await db.notification.count({ where: { userId: user.id } });
    return dataInFetchContext({ count }, context);
  },
) as {
  <C extends FetchActionContext>(context: C): Promise<FetchActionResponse<{ count: number }, C>>;
};

export const fetchNotificationsPagination = cache(
  async <C extends FetchActionContext>(
    { filters, page: _page }: Pick<NotificationsControls, "filters" | "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }
    const count = await db.notification.count({
      where: whereClause({ filters, user }),
    });
    return dataInFetchContext(
      clampPagination({ count, page: _page, pageSize: PAGE_SIZES.notification }),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: Pick<NotificationsControls, "filters" | "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

export const fetchNotifications = cache(
  async <C extends FetchActionContext>(
    { filters, page: _page }: NotificationsControls,
    context: C,
  ): Promise<FetchActionResponse<Notification[], C>> => {
    const { user, error } = await getAuthedUser({ strict: true });
    if (error) {
      return errorInFetchContext(error, context);
    }

    const {
      data: { page, pageSize },
    } = await fetchNotificationsPagination({ filters, page: _page }, { strict: true });

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    const data: Notification[] = await enhanced.notification.findMany({
      where: whereClause({ filters, user }),
      // orderBy: [{ [ordering.orderBy]: ordering.order }],
      skip: pageSize * (page - 1),
      take: pageSize,
    });

    return dataInFetchContext(data, context);
  },
) as {
  <C extends FetchActionContext>(
    params: NotificationsControls,
    context: C,
  ): Promise<FetchActionResponse<Notification[], C>>;
};
