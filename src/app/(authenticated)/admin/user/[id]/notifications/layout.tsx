import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";

const NotificationsAdminTableView = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsAdminTableView"),
  { loading: () => <Loading isLoading /> },
);

interface UserNotificationsLayoutProps {
  readonly children: ReactNode;
}

export default function UserNotificationsLayout({ children }: UserNotificationsLayoutProps) {
  return (
    <NotificationsAdminTableView excludeColumns={["user"]}>{children}</NotificationsAdminTableView>
  );
}
