import { parseFilters } from "~/lib/filters";

import { ProductNotificationsFiltersSchemas, ProductNotificationsFiltersOptions } from "~/actions";
import { fetchProductNotificationsCount } from "~/actions/notifications/fetch-product-notifications";

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
    ProductNotificationsFiltersSchemas,
    ProductNotificationsFiltersOptions,
  );
  const {
    data: { count },
  } = await fetchProductNotificationsCount(
    { visibility: "admin", filters: { ...filters, products: [params.id] } },
    { strict: true },
  );
  return <>{count}</>;
}
