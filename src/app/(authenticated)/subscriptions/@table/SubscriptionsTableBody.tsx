import dynamic from "next/dynamic";

import { pruneFilters } from "~/lib/filters";

import {
  type SubscriptionsFilters,
  type SubscriptionsControls,
  SubscriptionsFiltersOptions,
} from "~/actions";
import { fetchProductSubscriptions } from "~/actions/subscriptions/fetch-product-subscriptions";

import { Loading } from "~/components/loading/Loading";

const ClientSubscriptionsTableBody = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface SubscriptionsTableBodyProps {
  readonly filters: SubscriptionsFilters;
  readonly page: number;
  readonly controlBarTargetId: string;
  readonly ordering: SubscriptionsControls["ordering"];
}

export const SubscriptionsTableBody = async ({
  filters,
  page,
  ordering,
  controlBarTargetId,
}: SubscriptionsTableBodyProps): Promise<JSX.Element> => {
  const { data } = await fetchProductSubscriptions(
    {
      filters,
      ordering,
      page,
    },
    { strict: true },
  );
  const pruned = pruneFilters(filters, SubscriptionsFiltersOptions);
  return (
    <ClientSubscriptionsTableBody
      data={data}
      controlBarTargetId={controlBarTargetId}
      isEmpty={data.length === 0 && Object.keys(pruned).length === 0}
    />
  );
};
