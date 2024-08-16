import { Suspense } from "react";

import { fetchProductSubscriptionsPagination } from "~/actions/fetches/subscriptions";

import { Paginator } from "~/components/pagination/Paginator";
import { type SubscriptionsTableFilters } from "~/features/subscriptions";

export interface SubscriptionsTablePaginatorProps {
  readonly filters: SubscriptionsTableFilters;
  readonly page: number;
}

export const SubscriptionsTablePaginator = async ({
  filters,
  page: _page,
}: SubscriptionsTablePaginatorProps): Promise<JSX.Element> => {
  const {
    data: { count, page, pageSize },
  } = await fetchProductSubscriptionsPagination({ filters, page: _page }, { strict: true });

  return (
    <Suspense>
      <Paginator count={count} pageSize={pageSize} page={page} />
    </Suspense>
  );
};
