import dynamic from "next/dynamic";

import { type SubscriptionsControls } from "~/actions";
import { fetchProductSubscriptions } from "~/actions/subscriptions/fetch-product-subscriptions";

import { Loading } from "~/components/loading/Loading";

const UserSubscriptionsTableBody = dynamic(
  () =>
    import("~/features/users/components/tables/UserSubscriptionsTableBody").then(
      mod => mod.UserSubscriptionsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface SubscriptionsTableBodyProps {
  readonly userId: string;
  readonly filters: Omit<SubscriptionsControls["filters"], "users">;
  readonly page: number;
  readonly ordering: SubscriptionsControls["ordering"];
}

export const SubscriptionsTableBody = async ({
  ordering,
  userId,
  filters,
  page,
}: SubscriptionsTableBodyProps): Promise<JSX.Element> => {
  const { data } = await fetchProductSubscriptions(
    {
      ordering,
      filters: { ...filters, users: [userId] },
      includes: ["conditions", "product", "notificationsCount"],
      visibility: "admin",
      page,
    },
    { strict: true },
  );
  return <UserSubscriptionsTableBody data={data} />;
};
