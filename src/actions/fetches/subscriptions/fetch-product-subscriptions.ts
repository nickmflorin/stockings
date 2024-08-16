import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import type { Notification, User } from "~/database/model";
import { enhance } from "~/database/model";
import { conditionalFilters } from "~/database/util";

import { PAGE_SIZES } from "~/actions";

import { type NotificationsTableControls } from "~/features/notifications";

import { convertToPlainObject } from "~/api/serialization";

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

export const fetchNotificationsCount = cache(
  async ({ filters }: Pick<NotificationsTableControls, "filters">) => {
    const { user } = await getAuthedUser({ strict: true });
    return await db.notification.count({
      where: whereClause({ filters, user }),
    });
  },
);

export const fetchNotifications = cache(
  async ({ filters, page }: NotificationsTableControls): Promise<Notification[]> => {
    const { user } = await getAuthedUser({ strict: true });
    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });
    const data = await enhanced.notification.findMany({
      where: whereClause({ filters, user }),
      // orderBy: [{ [ordering.field]: ordering.order }],
      skip: PAGE_SIZES.notification * (Math.max(1, page) - 1),
      take: PAGE_SIZES.notification,
    });
    return data.map(convertToPlainObject);
  },
);
