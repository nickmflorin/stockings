import { redirect } from "next/navigation";
import { Suspense } from "react";

import { getAuthedUser } from "~/application/auth/server";

import { PAGE_SIZES } from "~/actions";
import { fetchNotificationsCount } from "~/actions/fetches/notifications";

import { Paginator } from "~/components/pagination/Paginator";
import { type NotificationsTableFilters } from "~/features/notifications";

export interface NotificationsTablePaginatorProps {
  readonly filters: NotificationsTableFilters;
}

export const NotificationsTablePaginator = async ({
  filters,
}: NotificationsTablePaginatorProps): Promise<JSX.Element> => {
  const { user } = await getAuthedUser();

  if (!user) {
    // TODO: Revisit this redirect
    return redirect("/sign-in");
  }

  const count = await fetchNotificationsCount({ filters });
  return (
    <Suspense>
      <Paginator count={count} pageSize={PAGE_SIZES.notification} />
    </Suspense>
  );
};
