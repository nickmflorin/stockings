import dynamic from "next/dynamic";

import { type ProductNotificationsControls } from "~/actions";
import { fetchProductNotifications } from "~/actions/notifications/fetch-product-notifications";

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
  readonly filters: Omit<ProductNotificationsControls["filters"], "users">;
  readonly page: number;
  readonly ordering: ProductNotificationsControls["ordering"];
}

export const NotificationsTableBody = async ({
  ordering,
  userId,
  filters,
  page,
}: NotificationsTableBodyProps): Promise<JSX.Element> => {
  const { data } = await fetchProductNotifications(
    {
      ordering,
      filters: { ...filters, users: [userId] },
      includes: ["product"],
      visibility: "admin",
      page,
    },
    { strict: true },
  );
  return <UserNotificationsTableBody data={data} />;
};
