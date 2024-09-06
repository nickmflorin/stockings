import type { TableColumnId, OrderableTableColumnId } from "~/components/tables";
import { ColumnsConfiguration } from "~/components/tables";

const UsersTableColumnConfigurations = ColumnsConfiguration([
  {
    id: "name",
    label: "Name",
    isOrderable: true,
  },
  {
    id: "subscriptionsCount",
    label: "# Subscriptions",
    align: "center",
    accessor: "subscriptionsCount",
  },
  {
    id: "notificationsCount",
    label: "# Notifications",
    align: "center",
    accessor: "notificationsCount",
  },
  {
    id: "createdAt",
    label: "Created",
    maxWidth: 240,
    isOrderable: true,
    align: "left",
  },
  {
    id: "updatedAt",
    label: "Last Updated",
    maxWidth: 240,
    isOrderable: true,
    align: "left",
  },
] as const);

export const UsersTableColumns = UsersTableColumnConfigurations.select([
  "name",
  "notificationsCount",
  "subscriptionsCount",
  "createdAt",
  "updatedAt",
]);

export type UsersTableColumnId = TableColumnId<typeof UsersTableColumns>;

export type UsersTableOrderableColumnId = OrderableTableColumnId<typeof UsersTableColumns>;
