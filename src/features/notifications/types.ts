import { type Notification } from "~/database/model";

import type { DataTableColumnConfig } from "~/components/tables";

export const NotificationsTableColumns = [
  {
    id: "type",
    label: "Type",
    minWidth: 240,
    maxWidth: 240,
  },
  {
    id: "state",
    label: "State",
    minWidth: 240,
    maxWidth: 240,
  },
] as const satisfies DataTableColumnConfig<Notification, string>[];

export type NotificationsTableColumnId = (typeof NotificationsTableColumns)[number]["id"];

export type OrderableNotificationsTableColumnId = Extract<
  (typeof NotificationsTableColumns)[number],
  { isOrderable: true }
>["id"];
