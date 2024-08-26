import { fetchNotificationsCount } from "~/actions/notifications";

import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

export default async function ProductsTitlePage() {
  const {
    data: { count },
  } = await fetchNotificationsCount({ strict: true });
  return (
    <div className="flex flex-row items-center gap-4">
      <Title component="h3">Notifications</Title>
      <Badge>{count}</Badge>
    </div>
  );
}
