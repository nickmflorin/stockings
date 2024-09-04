import { fetchProductNotificationsCount } from "~/actions/notifications";

import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

export default async function NotificationsTitlePage() {
  const {
    data: { count },
  } = await fetchProductNotificationsCount({ filters: {} }, { strict: true });
  return (
    <div className="flex flex-row items-center gap-4">
      <Title component="h3">Notifications</Title>
      <Badge>{count}</Badge>
    </div>
  );
}
