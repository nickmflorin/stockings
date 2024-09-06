"use client";
import dynamic from "next/dynamic";

import { Loading } from "~/components/loading/Loading";

const UserNotificationsTableBody = dynamic(
  () =>
    import("~/features/users/components/tables/UserNotificationsTableBody").then(
      mod => mod.UserNotificationsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export default function Error() {
  return <UserNotificationsTableBody data={[]} isError />;
}
