import { type ApiUser } from "~/database/model";

import { type DataTableColumnProperties } from "~/components/tables";
import { DateTimeText } from "~/components/typography/DateTimeText";
import { type UsersTableColumnId } from "~/features/users";
import { UserTile } from "~/features/users/components/UserTile";

export const UsersTableColumnProperties: DataTableColumnProperties<
  ApiUser<["notificationsCount", "subscriptionsCount"]>,
  UsersTableColumnId
> = {
  name: {
    cellRenderer(datum) {
      return <UserTile user={datum} />;
    },
  },
  createdAt: {
    cellRenderer(datum) {
      return <DateTimeText formatSeparately value={datum.createdAt} />;
    },
  },
  updatedAt: {
    cellRenderer(datum) {
      return <DateTimeText formatSeparately value={datum.updatedAt} />;
    },
  },
};
