import { fetchUsersCount } from "~/actions/users/fetch-users";

export default async function UsersTitlePage() {
  const {
    data: { count },
  } = await fetchUsersCount({ strict: true });
  return <>{count}</>;
}
