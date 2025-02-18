"use client";
import dynamic from "next/dynamic";

import { Loading } from "~/components/loading/Loading";

const NotificationsTableView = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsTableView"),
  { loading: () => <Loading isLoading /> },
);

const ClientProductNotificationsTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductNotificationsTableBody").then(
      mod => mod.ProductNotificationsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export default function Error() {
  // TODO: We have to plugin placeholders for the filter bar and pagination!
  return (
    <NotificationsTableView excludeColumns={["product"]}>
      <ClientProductNotificationsTableBody
        activeSubscriptions={[]}
        data={[]}
        isError
        errorMessage="There was an error loading the notifications."
      />
    </NotificationsTableView>
  );
}
