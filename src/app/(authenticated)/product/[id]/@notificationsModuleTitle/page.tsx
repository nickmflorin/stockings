import { ProductNotificationsFiltersObj } from "~/actions";
import { fetchProductNotificationsCount } from "~/actions/notifications";

import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

export interface NotificationsModuleHeaderPageProps {
  readonly params: { id: string };
  readonly searchParams: Record<string, string>;
}

export default async function NotificationsModuleHeaderPage({
  params,
  searchParams,
}: NotificationsModuleHeaderPageProps) {
  const filters = ProductNotificationsFiltersObj.parse(searchParams);
  const {
    data: { count },
  } = await fetchProductNotificationsCount(
    { filters: { ...filters, products: [params.id] }, visibility: "public" },
    { strict: true },
  );
  return (
    <div className="flex flex-row items-center gap-2">
      <Title component="h5">Notifications</Title>
      <Badge>{count}</Badge>
    </div>
  );
}
