import dynamic from "next/dynamic";

import { Loading } from "~/components/loading/Loading";

const ClientProductNotificationsTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductNotificationsTableBody").then(
      mod => mod.ProductNotificationsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export default function NotificationsLoading() {
  return <ClientProductNotificationsTableBody data={[]} isLoading activeSubscriptions={[]} />;
}
