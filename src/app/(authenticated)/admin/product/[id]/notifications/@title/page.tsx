import { ProductNotificationsFiltersObj } from "~/actions";
import { fetchProductNotificationsCount } from "~/actions/notifications/fetch-product-notifications";

export interface SubscriptionsTitlePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function SubscriptionsTitlePage({
  searchParams,
  params,
}: SubscriptionsTitlePageProps) {
  const filters = ProductNotificationsFiltersObj.parse(searchParams);
  const {
    data: { count },
  } = await fetchProductNotificationsCount(
    { visibility: "admin", filters: { ...filters, products: [params.id] } },
    { strict: true },
  );
  return <>{count}</>;
}
