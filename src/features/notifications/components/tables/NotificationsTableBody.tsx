"use client";
import RouterLink from "next/link";

import { type ApiProductNotification } from "~/database/model";

import { InlineLink } from "~/components/buttons";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import {
  type DataTableBodyProps,
  DataTableBody,
} from "~/components/tables/data-tables/DataTableBody";
import { Description } from "~/components/typography";
import {
  type ProductNotificationsTableColumnId,
  ProductNotificationsTableColumns,
} from "~/features/notifications";

import { useNotificationsTableColumnProperties } from "./hooks/use-column-properties";

export interface NotificationsTableBodyProps
  extends Omit<
    DataTableBodyProps<ApiProductNotification<["product"]>, ProductNotificationsTableColumnId>,
    "rowIsSelected" | "onRowSelected" | "getRowActions" | "columns"
  > {}

export const NotificationsTableBody = (props: NotificationsTableBodyProps): JSX.Element => {
  const columnProperties = useNotificationsTableColumnProperties({ visibility: "public" });

  return (
    <DataTableBody
      emptyContent={
        <div className="flex flex-col gap-4">
          <Description fontSize="sm">You have not received any notifications.</Description>
          <Description fontSize="sm">
            If you have not yet already done so, visit the{" "}
            <InlineLink element="a" component={RouterLink} href="/products" fontWeight="medium">
              Products Page
            </InlineLink>{" "}
            and subscribe to receive notifications for the products you would like.
          </Description>
        </div>
      }
      noResultsContent="No notifications found for search criteria."
      {...props}
      columns={convertConfigsToColumns(
        [...ProductNotificationsTableColumns.columns] as DataTableColumnConfig<
          ApiProductNotification<["product"]>,
          ProductNotificationsTableColumnId
        >[],
        columnProperties,
      )}
    />
  );
};

export default NotificationsTableBody;
