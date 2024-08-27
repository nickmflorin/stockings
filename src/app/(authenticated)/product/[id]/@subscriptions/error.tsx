"use client";
import dynamic from "next/dynamic";

import { Loading } from "~/components/loading/Loading";

const ClientProductSubscriptionsTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductSubscriptionsTableBody").then(
      mod => mod.ProductSubscriptionsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export default function Error() {
  return (
    <ClientProductSubscriptionsTableBody
      data={[]}
      isError
      errorMessage="There was an error loading the subscriptions."
    />
  );
}
