import dynamic from "next/dynamic";

import { type SubscriptionsControls } from "~/actions";
import { fetchProductSubscriptions } from "~/actions/subscriptions/fetch-product-subscriptions";
import { fetchUser } from "~/actions/users/fetch-user";

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
  readonly ordering: SubscriptionsControls["ordering"];
}

export const SubscriptionsTableBody = async ({
  ordering,
  userId,
}: SubscriptionsTableBodyProps): Promise<JSX.Element> => {
  const { data: user } = await fetchUser(userId, { includes: [] }, { strict: true });
  const { data } = await fetchProductSubscriptions(
    {
      ordering,
      filters: { users: [user.id] },
      includes: ["conditions", "product"],
      visibility: "admin",
    },
    { strict: true },
  );
  return <UserSubscriptionsTableBody data={data} />;
};
