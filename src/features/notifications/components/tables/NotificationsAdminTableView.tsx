"use client";
import type { ReactNode } from "react";

import { ProductNotificationsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import {
  ProductNotificationsAdminTableColumns,
  type ProductNotificationsAdminTableOrderableColumnId,
  type ProductNotificationsAdminTableColumnId,
} from "~/features/notifications/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface NotificationsAdminTableViewProps {
  readonly children: ReactNode;
  readonly filterBar?: JSX.Element;
  readonly pagination?: JSX.Element;
  readonly excludeColumns?: ProductNotificationsAdminTableColumnId[];
}

export const NotificationsAdminTableView = ({
  children,
  filterBar,
  pagination,
  excludeColumns,
}: NotificationsAdminTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<ProductNotificationsAdminTableOrderableColumnId>({
    useQueryParams: true,
    fields: ProductNotificationsAdminTableColumns.orderableColumns.map(c => c.id),
    defaultOrdering: ProductNotificationsDefaultOrdering,
  });
  return (
    <TableView header={filterBar} footer={pagination}>
      <DataTableWrapper
        columns={ProductNotificationsAdminTableColumns.columns}
        excludeColumns={excludeColumns}
        ordering={ordering}
        onSort={(e, col) => {
          const id = col.id;
          if (ProductNotificationsAdminTableColumns.isOrderableColumnId(id)) {
            setOrdering({ field: id });
          }
        }}
      >
        {children}
      </DataTableWrapper>
    </TableView>
  );
};

export default NotificationsAdminTableView;
