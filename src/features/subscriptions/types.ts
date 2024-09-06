import { type ApiProductSubscription } from "~/database/model";

import type { TableColumnId, OrderableTableColumnId } from "~/components/tables";
import { ColumnsConfiguration } from "~/components/tables";

export const SubscriptionsTableColumnConfigurations = ColumnsConfiguration([
  {
    id: "product",
    label: "Product",
    maxWidth: 240,
    isOrderable: true,
    align: "left",
  },
  {
    id: "user",
    label: "User",
    isOrderable: true,
    align: "left",
  },
  {
    id: "type",
    label: "Type",
    align: "left",
  },
  {
    id: "enabled",
    label: "Enabled",
    maxWidth: 60,
    align: "center",
  },
  {
    id: "conditions",
    label: "Conditions",
    maxWidth: 200,
    align: "center",
  },
  {
    id: "notifications",
    label: "Notifications",
    maxWidth: 140,
    align: "center",
  },
  {
    id: "createdAt",
    label: "Created",
    maxWidth: 240,
    isOrderable: true,
    align: "left",
    columnCellClassName: "hidden @3xl/subscriptions-table-view:table-cell",
  },
  {
    id: "updatedAt",
    label: "Last Updated",
    maxWidth: 240,
    isOrderable: true,
    align: "left",
    columnCellClassName: "hidden @3xl/subscriptions-table-view:table-cell",
  },
] as const);

export const SubscriptionsTableColumns = SubscriptionsTableColumnConfigurations.select([
  "product",
  "type",
  "conditions",
  "enabled",
  "notifications",
  "createdAt",
  "updatedAt",
]);

export type SubscriptionsTableColumnId = TableColumnId<typeof SubscriptionsTableColumns>;

export type SubscriptionsTableOrderableColumnId = OrderableTableColumnId<
  typeof SubscriptionsTableColumns
>;

export const SubscriptionsAdminTableColumns = SubscriptionsTableColumnConfigurations.select([
  "product",
  "user",
  "type",
  "conditions",
  "enabled",
  "notifications",
  "createdAt",
  "updatedAt",
]);

export type SubscriptionsAdminTableColumnId = TableColumnId<typeof SubscriptionsAdminTableColumns>;

export type SubscriptionsAdminTableOrderableColumnId = OrderableTableColumnId<
  typeof SubscriptionsAdminTableColumns
>;

export type SubscriptionsTableModel =
  | ApiProductSubscription<["conditions", "user", "notificationsCount"]>
  | ApiProductSubscription<["product", "conditions", "notificationsCount"]>;

export const subscriptionsTableModelHasProduct = (
  m: SubscriptionsTableModel,
): m is ApiProductSubscription<["product", "conditions", "notificationsCount"]> =>
  (m as ApiProductSubscription<["product", "conditions", "notificationsCount"]>).product !==
  undefined;

export const subscriptionsTableModelHasUser = (
  m: SubscriptionsTableModel,
): m is ApiProductSubscription<["user", "conditions", "notificationsCount"]> =>
  (m as ApiProductSubscription<["user", "conditions", "notificationsCount"]>).user !== undefined;
