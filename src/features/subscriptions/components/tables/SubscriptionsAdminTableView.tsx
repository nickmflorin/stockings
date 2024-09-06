"use client";
import type { ReactNode } from "react";

import { SubscriptionsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import { classNames, type ComponentProps } from "~/components/types";
import {
  SubscriptionsAdminTableColumns,
  type SubscriptionsAdminTableOrderableColumnId,
  type SubscriptionsAdminTableColumnId,
} from "~/features/subscriptions/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface SubscriptionsAdminTableViewProps extends ComponentProps {
  readonly children: ReactNode;
  readonly filterBar?: JSX.Element;
  readonly controlBar?: JSX.Element;
  readonly pagination?: JSX.Element;
  readonly controlBarTargetId?: string;
  readonly excludeColumns?: SubscriptionsAdminTableColumnId[];
}

export const SubscriptionsAdminTableView = ({
  children,
  filterBar,
  excludeColumns,
  pagination,
  controlBarTargetId = "subscriptions-table-control-bar-target",
  ...props
}: SubscriptionsAdminTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<SubscriptionsAdminTableOrderableColumnId>({
    useQueryParams: true,
    fields: SubscriptionsAdminTableColumns.orderableColumns.map(c => c.id),
    defaultOrdering: SubscriptionsDefaultOrdering,
  });
  return (
    <TableView
      {...props}
      header={filterBar}
      controlBarTargetId={controlBarTargetId}
      className={classNames("@container/subscriptions-table-view", props.className)}
    >
      <DataTableWrapper
        ordering={ordering}
        rowsAreSelectable={true}
        rowsHaveActions={true}
        excludeColumns={excludeColumns}
        columns={SubscriptionsAdminTableColumns.columns}
        onSort={(e, col) => {
          const id = col.id;
          if (SubscriptionsAdminTableColumns.isOrderableColumnId(id)) {
            setOrdering({ field: id });
          }
        }}
      >
        {children}
      </DataTableWrapper>
    </TableView>
  );
};

export default SubscriptionsAdminTableView;
