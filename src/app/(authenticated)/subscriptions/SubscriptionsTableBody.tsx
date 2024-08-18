import dynamic from "next/dynamic";

import { type Ordering } from "~/lib/ordering";

import { fetchProductSubscriptions } from "~/actions/fetches/subscriptions";

import { Loading } from "~/components/loading/Loading";
import {
  type OrderableSubscriptionsTableColumnId,
  type SubscriptionsTableFilters,
} from "~/features/subscriptions";

const ClientSubscriptionsTableBody = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface SubscriptionsTableBodyProps {
  readonly filters: SubscriptionsTableFilters;
  readonly page: number;
  readonly ordering: Ordering<OrderableSubscriptionsTableColumnId>;
}

export const SubscriptionsTableBody = async ({
  filters,
  page,
  ordering,
}: SubscriptionsTableBodyProps): Promise<JSX.Element> => {
  const { data } = await fetchProductSubscriptions(
    {
      filters,
      ordering,
      page,
    },
    { strict: true },
  );
  return <ClientSubscriptionsTableBody data={data} />;
};
