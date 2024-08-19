"use client";
import TableContainer from "@mui/material/TableContainer";

import { SubscriptionsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import {
  SubscriptionsTableColumns,
  type OrderableSubscriptionsTableColumnId,
  OrderableSubscriptionsTableColumnIds,
} from "~/features/subscriptions/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface SubscriptionsTableViewProps {
  readonly children: JSX.Element;
  readonly filterBar?: JSX.Element;
  readonly controlBar?: JSX.Element;
  readonly pagination?: JSX.Element;
}

export const SubscriptionsTableView = ({
  children,
  filterBar,
  pagination,
}: SubscriptionsTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<OrderableSubscriptionsTableColumnId>({
    useQueryParams: true,
    fields: OrderableSubscriptionsTableColumnIds,
    defaultOrdering: SubscriptionsDefaultOrdering,
  });
  return (
    <TableView header={filterBar} footer={pagination}>
      <TableContainer sx={{ maxHeight: "100%" }}>
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
