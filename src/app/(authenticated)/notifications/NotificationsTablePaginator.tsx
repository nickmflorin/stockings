import { Suspense } from "react";

import { fetchNotificationsPagination } from "~/actions/fetches/notifications";

import { Paginator } from "~/components/pagination/Paginator";
import { type NotificationsTableFilters } from "~/features/notifications";

export interface NotificationsTablePaginatorProps {
  readonly filters: NotificationsTableFilters;
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
