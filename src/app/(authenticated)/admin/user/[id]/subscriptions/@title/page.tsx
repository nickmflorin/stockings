import { parseFilters } from "~/lib/filters";

import { SubscriptionsFiltersSchemas, SubscriptionsFiltersOptions } from "~/actions";
import { fetchProductSubscriptionsCount } from "~/actions/subscriptions/fetch-product-subscriptions";

import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

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
  return (
    <div className="flex flex-row items-center gap-4">
      <Title component="h3">Subscriptions</Title>
      <Badge>{count}</Badge>
    </div>
  );
}
