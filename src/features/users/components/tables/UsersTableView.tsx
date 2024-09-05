"use client";
import type { ReactNode } from "react";

import { UsersDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import { type ComponentProps } from "~/components/types";
import {
  UsersTableColumns,
  type UsersTableOrderableColumnId,
  type UsersTableColumnId,
} from "~/features/users/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface UsersTableViewProps extends ComponentProps {
  readonly children: ReactNode;
  readonly filterBar?: JSX.Element;
  readonly controlBar?: JSX.Element;
  readonly pagination?: JSX.Element;
  readonly controlBarTargetId?: string;
  readonly excludeColumns?: UsersTableColumnId[];
}

export const UsersTableView = ({
  children,
  filterBar,
  excludeColumns,
  pagination,
  controlBarTargetId = "users-table-control-bar-target",
  ...props
}: UsersTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<UsersTableOrderableColumnId>({
    useQueryParams: true,
    fields: UsersTableColumns.orderableColumns.map(c => c.id),
    defaultOrdering: UsersDefaultOrdering,
  });
  return (
    <TableView
      {...props}
      header={filterBar}
      footer={pagination}
      controlBarTargetId={controlBarTargetId}
    >
      <DataTableWrapper
        ordering={ordering}
        rowsAreSelectable={false}
        rowsHaveActions={false}
        excludeColumns={excludeColumns}
        columns={UsersTableColumns.columns}
        onSort={(e, col) => {
          const id = col.id;
          if (UsersTableColumns.isOrderableColumnId(id)) {
            setOrdering({ field: id });
          }
        }}
      >
        {children}
      </DataTableWrapper>
    </TableView>
  );
};

export default UsersTableView;
