"use client";
import type { ReactNode } from "react";

import TableContainer from "@mui/material/TableContainer";

import { SubscriptionsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import { classNames, type ComponentProps } from "~/components/types";
import {
  SubscriptionsTableColumns,
  type OrderableSubscriptionsTableColumnId,
  OrderableSubscriptionsTableColumnIds,
} from "~/features/subscriptions/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface SubscriptionsTableViewProps extends ComponentProps {
  readonly children: ReactNode;
  readonly filterBar?: JSX.Element;
  readonly controlBar?: JSX.Element;
  readonly pagination?: JSX.Element;
  readonly controlBarTargetId?: string;
}

export const SubscriptionsTableView = ({
  children,
  filterBar,
  pagination,
  controlBarTargetId = "subscriptions-table-control-bar-target",
  ...props
}: SubscriptionsTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<OrderableSubscriptionsTableColumnId>({
    useQueryParams: true,
    fields: OrderableSubscriptionsTableColumnIds,
    defaultOrdering: SubscriptionsDefaultOrdering,
  });
  return (
    <TableView
      {...props}
      header={filterBar}
      footer={pagination}
      controlBarTargetId={controlBarTargetId}
      className={classNames("@container/subscriptions-table-view", props.className)}
    >
      <TableContainer sx={{ maxHeight: "100%", overflowX: "auto" }}>
        <DataTableWrapper
          ordering={ordering}
          rowsAreSelectable
          rowsHaveActions
          columns={SubscriptionsTableColumns}
          onSort={(e, col) => {
            if (
              OrderableSubscriptionsTableColumnIds.includes(
                col.id as OrderableSubscriptionsTableColumnId,
              )
            ) {
              setOrdering({ field: col.id as OrderableSubscriptionsTableColumnId });
            }
          }}
        >
          {children}
        </DataTableWrapper>
      </TableContainer>
    </TableView>
  );
};

export default SubscriptionsTableView;
