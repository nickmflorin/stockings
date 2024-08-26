import dynamic from "next/dynamic";

import { type NotificationsFilters } from "~/actions";
import { fetchNotifications } from "~/actions/notifications";

import { Loading } from "~/components/loading/Loading";

const ClientNotificationsTableBody = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface NotificationsTableBodyProps {
  readonly filters: NotificationsFilters;
  readonly page: number;
}

export const NotificationsTableBody = async ({
  filters,
  page,
}: NotificationsTableBodyProps): Promise<JSX.Element> => {
  const { data: notifications } = await fetchNotifications(
    {
      filters,
      // ordering: { field: "createdAt", order: "asc" },
      page,
    },
    { strict: true },
  );
  return <ClientNotificationsTableBody data={notifications} />;
};
