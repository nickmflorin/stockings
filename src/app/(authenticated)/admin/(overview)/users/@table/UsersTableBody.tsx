import dynamic from "next/dynamic";

import { type UsersControls, type UsersFilters } from "~/actions";
import { fetchUsers } from "~/actions/users/fetch-users";

import { Loading } from "~/components/loading/Loading";

const ClientUsersTableBody = dynamic(
  () => import("~/features/users/components/tables/UsersTableBody"),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface UsersTableBodyProps {
  readonly filters: UsersFilters;
  readonly page: number;
  readonly ordering: UsersControls["ordering"];
}

export const UsersTableBody = async ({
  filters,
  page,
  ordering,
}: UsersTableBodyProps): Promise<JSX.Element> => {
  const { data: users } = await fetchUsers(
    {
      filters,
      ordering,
      page,
      includes: ["notificationsCount", "subscriptionsCount"],
    },
    { strict: true },
  );
  return <ClientUsersTableBody data={users} />;
};
