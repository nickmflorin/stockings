import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";

const SubscriptionsTableView = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableView"),
  { loading: () => <Loading isLoading /> },
);

interface ProductSubscriptionsLayoutProps {
  readonly children: ReactNode;
}

export default function ProductSubscriptionsLayout({ children }: ProductSubscriptionsLayoutProps) {
  return (
    <SubscriptionsTableView
      className="overflow-y-hidden"
      controlBarTargetId="product-subscriptions-control-bar"
      excludeColumns={["product"]}
    >
      {children}
    </SubscriptionsTableView>
  );
}
