"use client";
import type { ReactNode } from "react";

import { ProductNotificationsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import {
  ProductNotificationsTableColumns,
  type OrderableProductNotificationsTableColumnId,
  OrderableProductNotificationsTableColumnIds,
  type ProductNotificationsTableColumnId,
} from "~/features/notifications/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface NotificationsTableViewProps {
  readonly children: ReactNode;
  readonly filterBar?: JSX.Element;
  readonly pagination?: JSX.Element;
  readonly excludeColumns?: ProductNotificationsTableColumnId[];
}

export const NotificationsTableView = ({
  children,
  filterBar,
  pagination,
  excludeColumns,
}: NotificationsTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<OrderableProductNotificationsTableColumnId>({
    useQueryParams: true,
    fields: OrderableProductNotificationsTableColumnIds,
    defaultOrdering: ProductNotificationsDefaultOrdering,
  });
  return (
    <TableView header={filterBar} footer={pagination}>
      <DataTableWrapper
        columns={ProductNotificationsTableColumns}
        excludeColumns={excludeColumns}
        ordering={ordering}
        onSort={(e, col) => {
          if (
            OrderableProductNotificationsTableColumnIds.includes(
              col.id as OrderableProductNotificationsTableColumnId,
            )
          ) {
            setOrdering({ field: col.id as OrderableProductNotificationsTableColumnId });
          }
        }}
      >
        {children}
      </DataTableWrapper>
    </TableView>
  );
};

export default NotificationsTableView;
