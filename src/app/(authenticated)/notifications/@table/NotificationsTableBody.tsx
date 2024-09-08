import dynamic from "next/dynamic";

import { type ProductNotificationsControls, type ProductNotificationsFilters } from "~/actions";
import { ProductNotificationsFiltersObj } from "~/actions";
import { fetchProductNotifications } from "~/actions/notifications";

import { Loading } from "~/components/loading/Loading";

const ClientNotificationsTableBody = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface NotificationsTableBodyProps {
  readonly filters: ProductNotificationsFilters;
  readonly page: number;
  readonly ordering: ProductNotificationsControls["ordering"];
}

export const NotificationsTableBody = async ({
  filters,
  ordering,
  page,
}: NotificationsTableBodyProps): Promise<JSX.Element> => {
  const { data: notifications } = await fetchProductNotifications(
    {
      filters,
      ordering,
      page,
      includes: ["product"],
      visibility: "public",
    },
    { strict: true },
  );
  return (
    <ClientNotificationsTableBody
      data={notifications}
      isEmpty={notifications.length === 0 && ProductNotificationsFiltersObj.areEmpty(filters)}
    />
  );
};
