import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";

const NotificationsTableView = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsTableView"),
  { loading: () => <Loading isLoading /> },
);

interface ProductNotificationsLayoutProps {
  readonly children: ReactNode;
}

export default function ProductNotificationsLayout({ children }: ProductNotificationsLayoutProps) {
  return <NotificationsTableView excludeColumns={["product"]}>{children}</NotificationsTableView>;
}
