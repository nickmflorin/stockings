import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import type { Notification, User } from "~/database/model";
import { enhance } from "~/database/model";
import { conditionalFilters } from "~/database/util";

import {
  PAGE_SIZES,
  type FetchActionContext,
  type FetchActionResponse,
  type ServerSidePaginationParams,
  errorInFetchContext,
  dataInFetchContext,
  clampPagination,
} from "~/actions";

import { type NotificationsTableControls } from "~/features/notifications";

const filtersClause = (filters: Partial<NotificationsTableControls["filters"]>) =>
  conditionalFilters([
    filters.states && filters.states.length !== 0 ? { state: { in: filters.states } } : undefined,
    filters.types && filters.types.length !== 0
      ? { notificationType: { in: filters.types } }
      : undefined,
  ] as const);

const whereClause = ({
  filters,
  user,
}: Pick<NotificationsTableControls, "filters"> & { readonly user: User }) => {
  const clause = filtersClause(filters);
  if (clause.length !== 0) {
    return { AND: [...clause, { userId: user.id }] };
  }
  return { userId: user.id };
};

export const fetchNotificationsPagination = cache(
  async <C extends FetchActionContext>(
    { filters, page: _page }: Pick<NotificationsTableControls, "filters" | "page">,
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
    params: Pick<NotificationsTableControls, "filters" | "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

export const fetchNotifications = cache(
  async <C extends FetchActionContext>(
    { filters, page: _page }: NotificationsTableControls,
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
      // orderBy: [{ [ordering.field]: ordering.order }],
      skip: pageSize * (page - 1),
      take: pageSize,
    });

    return dataInFetchContext(data, context);
  },
) as {
  <C extends FetchActionContext>(
    params: NotificationsTableControls,
    context: C,
  ): Promise<FetchActionResponse<Notification[], C>>;
};
