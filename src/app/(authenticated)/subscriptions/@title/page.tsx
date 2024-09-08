import { parseFilters } from "~/lib/filters";

import { SubscriptionsFiltersSchemas, SubscriptionsFiltersOptions } from "~/actions";
import { fetchProductSubscriptionsCount } from "~/actions/subscriptions/fetch-product-subscriptions";

export interface SubscriptionsTitlePageProps {
  readonly searchParams: Record<string, string>;
}

export default async function SubscriptionsTitlePage({
  searchParams,
}: SubscriptionsTitlePageProps) {
  const filters = parseFilters(
    searchParams,
    SubscriptionsFiltersSchemas,
    SubscriptionsFiltersOptions,
  );

  const {
    data: { count },
  } = await fetchProductSubscriptionsCount({ visibility: "public", filters }, { strict: true });
  return <>{count}</>;
}
