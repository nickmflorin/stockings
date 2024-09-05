import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";

const SubscriptionsAdminTableView = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsAdminTableView"),
  { loading: () => <Loading isLoading /> },
);

interface ProductSubscriptionsLayoutProps {
  readonly children: ReactNode;
}

export default function ProductSubscriptionsLayout({ children }: ProductSubscriptionsLayoutProps) {
  return (
    <SubscriptionsAdminTableView
      className="overflow-y-hidden"
      controlBarTargetId="product-subscriptions-control-bar"
      excludeColumns={["product"]}
    >
      {children}
    </SubscriptionsAdminTableView>
  );
}
