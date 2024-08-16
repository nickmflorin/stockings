import { redirect } from "next/navigation";
import { Suspense } from "react";

import { getAuthedUser } from "~/application/auth/server";

import { PAGE_SIZES } from "~/actions";
import { fetchProductSubscriptionsCount } from "~/actions/fetches/subscriptions";

import { Paginator } from "~/components/pagination/Paginator";
import { type SubscriptionsTableFilters } from "~/features/subscriptions";

export interface SubscriptionsTablePaginatorProps {
  readonly filters: SubscriptionsTableFilters;
}

export const SubscriptionsTablePaginator = async ({
  filters,
}: SubscriptionsTablePaginatorProps): Promise<JSX.Element> => {
  const { user } = await getAuthedUser();

  if (!user) {
    // TODO: Revisit this redirect
    return redirect("/sign-in");
  }

  const count = await fetchProductSubscriptionsCount({ filters });
  return (
    <Suspense>
      <Paginator count={count} pageSize={PAGE_SIZES.notification} />
    </Suspense>
  );
};
