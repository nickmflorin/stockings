import dynamic from "next/dynamic";

import { pruneFilters } from "~/lib/filters";

import { type ProductNotificationsControls, type ProductNotificationsFilters } from "~/actions";
import { ProductNotificationsFiltersOptions } from "~/actions";
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
    },
    { strict: true },
  );
  const pruned = pruneFilters(filters, ProductNotificationsFiltersOptions);
  return (
    <ClientNotificationsTableBody
      data={notifications}
      isEmpty={notifications.length === 0 && Object.keys(pruned).length === 0}
    />
  );
};
