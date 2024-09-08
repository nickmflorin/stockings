import { SubscriptionsFiltersObj } from "~/actions";
import { fetchProductSubscriptionsCount } from "~/actions/subscriptions/fetch-product-subscriptions";

export interface SubscriptionsTitlePageProps {
  readonly searchParams: Record<string, string>;
}

export default async function SubscriptionsTitlePage({
  searchParams,
}: SubscriptionsTitlePageProps) {
  const filters = SubscriptionsFiltersObj.parse(searchParams);
  const {
    data: { count },
  } = await fetchProductSubscriptionsCount({ visibility: "public", filters }, { strict: true });
  return <>{count}</>;
}
