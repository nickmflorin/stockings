import { fetchUsersCount } from "~/actions/users/fetch-users";

import { Badge } from "~/components/badges/Badge";
import { Title } from "~/components/typography";

export default async function UsersTitlePage() {
  const {
    data: { count },
  } = await fetchUsersCount({ strict: true });
  return (
    <div className="flex flex-row items-center gap-4">
      <Title component="h3">Users</Title>
      <Badge>{count}</Badge>
    </div>
  );
}
