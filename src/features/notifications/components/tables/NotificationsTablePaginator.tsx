import { Suspense } from "react";

import { type ProductNotificationsFilters } from "~/actions";
import { fetchProductNotificationsPagination } from "~/actions/notifications";

import { Paginator } from "~/components/pagination/Paginator";

export interface NotificationsTablePaginatorProps {
  readonly filters: ProductNotificationsFilters;
  readonly page: number;
}

export const NotificationsTablePaginator = async ({
  filters,
  page: _page,
}: NotificationsTablePaginatorProps): Promise<JSX.Element> => {
  const {
    data: { count, page, pageSize },
  } = await fetchProductNotificationsPagination({ filters, page: _page }, { strict: true });
  return (
    <Suspense>
      <Paginator count={count} pageSize={pageSize} page={page} />
    </Suspense>
  );
};
