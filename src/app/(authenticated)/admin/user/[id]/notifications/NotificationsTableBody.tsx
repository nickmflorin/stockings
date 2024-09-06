import dynamic from "next/dynamic";

import { type ProductNotificationsControls } from "~/actions";
import { fetchProductNotifications } from "~/actions/notifications/fetch-product-notifications";
import { fetchUser } from "~/actions/users/fetch-user";

import { Loading } from "~/components/loading/Loading";

const UserNotificationsTableBody = dynamic(
  () =>
    import("~/features/users/components/tables/UserNotificationsTableBody").then(
      mod => mod.UserNotificationsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface NotificationsTableBodyProps {
  readonly userId: string;
  readonly ordering: ProductNotificationsControls["ordering"];
}

export const NotificationsTableBody = async ({
  ordering,
  userId,
}: NotificationsTableBodyProps): Promise<JSX.Element> => {
  const { data: user } = await fetchUser(userId, { includes: [] }, { strict: true });
  const { data } = await fetchProductNotifications(
    {
      ordering,
      filters: { users: [user.id] },
      includes: ["product"],
      visibility: "admin",
    },
    { strict: true },
  );
  return <UserNotificationsTableBody data={data} />;
};
