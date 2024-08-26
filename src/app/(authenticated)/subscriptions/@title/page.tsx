import { fetchSubscriptionsCount } from "~/actions/subscriptions/fetch-subscriptions";

import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

export default async function ProductsTitlePage() {
  const {
    data: { count },
  } = await fetchSubscriptionsCount({ strict: true });
  return (
    <div className="flex flex-row items-center gap-4">
      <Title component="h3">Subscriptions</Title>
      <Badge>{count}</Badge>
    </div>
  );
}
