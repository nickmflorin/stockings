/* eslint-disable-next-line max-len */
import { fetchProductSubscriptionsCount } from "~/actions/subscriptions/fetch-product-subscriptions";

import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

export default async function ProductsTitlePage() {
  const {
    data: { count },
  } = await fetchProductSubscriptionsCount({}, { strict: true });
  return (
    <div className="flex flex-row items-center gap-4">
      <Title component="h3">Subscriptions</Title>
      <Badge>{count}</Badge>
    </div>
  );
}
