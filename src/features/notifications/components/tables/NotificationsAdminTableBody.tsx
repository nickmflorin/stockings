"use client";
import { type ApiProductNotification } from "~/database/model";

import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import {
  type DataTableBodyProps,
  DataTableBody,
} from "~/components/tables/data-tables/DataTableBody";
import {
  type ProductNotificationsAdminTableColumnId,
  ProductNotificationsAdminTableColumns,
} from "~/features/notifications";
import { UserTile } from "~/features/users/components/UserTile";

import { NotificationsTableColumnProperties } from "./NotificationsTableColumnProperties";

export interface NotificationsAdminTableBodyProps<
  M extends ApiProductNotification<["product", "user"]> | ApiProductNotification<["user"]>,
> extends Omit<
    DataTableBodyProps<M, ProductNotificationsAdminTableColumnId>,
    "rowIsSelected" | "onRowSelected" | "getRowActions" | "columns"
  > {}

export const NotificationsAdminTableBody = <
  M extends ApiProductNotification<["product", "user"]> | ApiProductNotification<["user"]>,
>(
  props: NotificationsAdminTableBodyProps<M>,
): JSX.Element => (
  <DataTableBody
    emptyContent="There are no notifications."
    noResultsContent="No notifications found for search criteria."
    {...props}
    columns={convertConfigsToColumns(
      [...ProductNotificationsAdminTableColumns.columns] as DataTableColumnConfig<
        M,
        ProductNotificationsAdminTableColumnId
      >[],
      {
        ...NotificationsTableColumnProperties("admin"),
        user: {
          cellRenderer: datum => <UserTile user={datum.user} />,
        },
      },
    )}
  />
);

export default NotificationsAdminTableBody;
