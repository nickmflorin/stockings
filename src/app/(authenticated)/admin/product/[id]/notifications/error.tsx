"use client";
import dynamic from "next/dynamic";

import { Loading } from "~/components/loading/Loading";

const ProductNotificationsAdminTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductNotificationsAdminTableBody").then(
      mod => mod.ProductNotificationsAdminTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export default function Error() {
  return <ProductNotificationsAdminTableBody data={[]} isError />;
}
