import { Suspense } from "react";

import { type ActionVisibility, type ProductNotificationsFilters } from "~/actions";
import { fetchProductNotificationsPagination } from "~/actions/notifications";

import { Paginator } from "~/components/pagination/Paginator";

export interface NotificationsTablePaginatorProps {
  readonly filters: ProductNotificationsFilters;
  readonly page: number;
  readonly visibility: ActionVisibility;
}

export const NotificationsTablePaginator = async ({
  filters,
  page: _page,
  visibility,
}: NotificationsTablePaginatorProps): Promise<JSX.Element> => {
  const {
    data: { count, page, pageSize },
  } = await fetchProductNotificationsPagination(
    { filters, page: _page, visibility },
    { strict: true },
  );
  return (
    <Suspense>
      <Paginator count={count} pageSize={pageSize} page={page} />
    </Suspense>
  );
};
