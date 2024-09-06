import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";

const NotificationsAdminTableView = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsAdminTableView"),
  { loading: () => <Loading isLoading /> },
);

interface ProductNotificationsLayoutProps {
  readonly children: ReactNode;
}

export default function ProductNotificationsLayout({ children }: ProductNotificationsLayoutProps) {
  return (
    <NotificationsAdminTableView excludeColumns={["product"]}>
      {children}
    </NotificationsAdminTableView>
  );
}
