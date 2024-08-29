import { Suspense } from "react";

import { type SubscriptionsFilters } from "~/actions";
/* eslint-disable-next-line max-len */
import { fetchProductSubscriptionsPagination } from "~/actions/subscriptions/fetch-product-subscriptions";

import { Paginator } from "~/components/pagination/Paginator";

export interface SubscriptionsTablePaginatorProps {
  readonly filters: SubscriptionsFilters;
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
