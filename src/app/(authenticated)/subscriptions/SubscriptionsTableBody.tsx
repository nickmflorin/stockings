import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { getAuthedUser } from "~/application/auth/server";

import { fetchProductSubscriptions } from "~/actions/fetches/subscriptions";

import { Loading } from "~/components/loading/Loading";
import { type SubscriptionsTableFilters } from "~/features/subscriptions";

const ClientSubscriptionsTableBody = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface SubscriptionsTableBodyProps {
  readonly filters: SubscriptionsTableFilters;
  readonly page: number;
}

export const SubscriptionsTableBody = async ({
  filters,
  page,
}: SubscriptionsTableBodyProps): Promise<JSX.Element> => {
  const { user } = await getAuthedUser();

  if (!user) {
    // TODO: Revisit this redirect
    return redirect("/sign-in");
  }

  const products = await fetchProductSubscriptions({
    filters,
    // ordering: { field: "createdAt", order: "asc" },
    page,
  });
  return <ClientSubscriptionsTableBody data={products} />;
};
