import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { getAuthedUser } from "~/application/auth/server";

import { fetchNotifications } from "~/actions/fetches/notifications";

import { Loading } from "~/components/loading/Loading";
import { type NotificationsTableFilters } from "~/features/notifications";

const ClientNotificationsTableBody = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface NotificationsTableBodyProps {
  readonly filters: NotificationsTableFilters;
  readonly page: number;
}

export const NotificationsTableBody = async ({
  filters,
  page,
}: NotificationsTableBodyProps): Promise<JSX.Element> => {
  const { user } = await getAuthedUser();

  if (!user) {
    // TODO: Revisit this redirect
    return redirect("/sign-in");
  }

  const products = await fetchNotifications({
    filters,
    // ordering: { field: "createdAt", order: "asc" },
    page,
  });
  return <ClientNotificationsTableBody data={products} />;
};
