import dynamic from "next/dynamic";

import { fetchProductSubscriptions } from "~/actions/fetches/subscriptions";

import { Loading } from "~/components/loading/Loading";
import { type SubscriptionsTableFilters } from "~/features/subscriptions";

const ClientSubscriptionsTableBody = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface SubscriptionsTableBodyProps {
  readonly filters: SubscriptionsTableFilters;
  readonly page: number;
}

export const SubscriptionsTableBody = async ({
  filters,
  page,
}: SubscriptionsTableBodyProps): Promise<JSX.Element> => {
  const { data } = await fetchProductSubscriptions(
    {
      filters,
      ordering: { field: "createdAt", order: "desc" },
      page,
    },
    { strict: true },
  );
  return <ClientSubscriptionsTableBody data={data} />;
};
