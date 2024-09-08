import { UsersFiltersObj } from "~/actions";
import { fetchUsersCount } from "~/actions/users/fetch-users";

export interface UsersTitlePageProps {
  readonly searchParams: Record<string, string>;
}

export default async function UsersTitlePage({ searchParams }: UsersTitlePageProps) {
  const filters = UsersFiltersObj.parse(searchParams);
  const {
    data: { count },
  } = await fetchUsersCount({ visibility: "admin", filters }, { strict: true });
  return <>{count}</>;
}
