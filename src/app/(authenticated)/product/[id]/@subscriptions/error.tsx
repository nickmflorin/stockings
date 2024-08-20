"use client";
import dynamic from "next/dynamic";

import { Loading } from "~/components/loading/Loading";

const SubscriptionsTableView = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableView"),
  { loading: () => <Loading isLoading /> },
);

const ClientSubscriptionsTableBody = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export default function Error() {
  return (
    <SubscriptionsTableView controlBarTargetId="product-subscriptions-control-bar">
      <ClientSubscriptionsTableBody
        data={[]}
        isError
        errorMessage="There was an error loading the subscriptions."
        controlBarTargetId="product-subscriptions-control-bar"
      />
    </SubscriptionsTableView>
  );
}
