import { ProductNotificationsFiltersObj } from "~/actions";
import { fetchProductNotificationsCount } from "~/actions/notifications";

export interface NotificationsTitlePageProps {
  readonly searchParams: Record<string, string>;
}

export default async function NotificationsTitlePage({
  searchParams,
}: NotificationsTitlePageProps) {
  const filters = ProductNotificationsFiltersObj.parse(searchParams);
  const {
    data: { count },
  } = await fetchProductNotificationsCount({ filters, visibility: "public" }, { strict: true });
  return <>{count}</>;
}
