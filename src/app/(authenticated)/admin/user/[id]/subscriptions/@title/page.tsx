import { parseFilters } from "~/lib/filters";

import { SubscriptionsFiltersSchemas, SubscriptionsFiltersOptions } from "~/actions";
import { fetchProductSubscriptionsCount } from "~/actions/subscriptions/fetch-product-subscriptions";

export interface SubscriptionsTitlePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function SubscriptionsTitlePage({
  searchParams,
  params,
}: SubscriptionsTitlePageProps) {
  const filters = parseFilters(
    searchParams,
    SubscriptionsFiltersSchemas,
    SubscriptionsFiltersOptions,
  );
  const {
    data: { count },
  } = await fetchProductSubscriptionsCount(
    { visibility: "admin", filters: { ...filters, users: [params.id] } },
    { strict: true },
  );
  return <>{count}</>;
}
