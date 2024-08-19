import { Suspense } from "react";

import { type NotificationsFilters } from "~/actions";
import { fetchNotificationsPagination } from "~/actions/notifications";

import { Paginator } from "~/components/pagination/Paginator";

export interface NotificationsTablePaginatorProps {
  readonly filters: NotificationsFilters;
  readonly page: number;
}

export const NotificationsTablePaginator = async ({
  filters,
  page: _page,
}: NotificationsTablePaginatorProps): Promise<JSX.Element> => {
  const {
    data: { count, page, pageSize },
  } = await fetchNotificationsPagination({ filters, page: _page }, { strict: true });
  return (
    <Suspense>
      <Paginator count={count} pageSize={pageSize} page={page} />
    </Suspense>
  );
};
