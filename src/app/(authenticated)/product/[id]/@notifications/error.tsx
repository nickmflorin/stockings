"use client";
import dynamic from "next/dynamic";

import { Loading } from "~/components/loading/Loading";

const ClientProductNotificationsTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductNotificationsTableBody").then(
      mod => mod.ProductNotificationsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export default function Error() {
  return (
    <ClientProductNotificationsTableBody
      activeSubscriptions={[]}
      data={[]}
      isError
      errorMessage="There was an error loading the notifications."
    />
  );
}
