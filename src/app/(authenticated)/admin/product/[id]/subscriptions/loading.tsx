import dynamic from "next/dynamic";

import { Loading } from "~/components/loading/Loading";

const ProductSubscriptionsAdminTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductSubscriptionsAdminTableBody").then(
      mod => mod.ProductSubscriptionsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export default function SubscriptionsLoading() {
  return <ProductSubscriptionsAdminTableBody data={[]} isLoading />;
}
