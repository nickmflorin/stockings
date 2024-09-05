"use client";
import dynamic from "next/dynamic";

import { Loading } from "~/components/loading/Loading";

const UserSubscriptionsTableBody = dynamic(
  () =>
    import("~/features/users/components/tables/UserSubscriptionsTableBody").then(
      mod => mod.UserSubscriptionsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export default function Error() {
  return (
    <UserSubscriptionsTableBody
      data={[]}
      isError
      errorMessage="There was an error loading the subscriptions."
    />
  );
}
