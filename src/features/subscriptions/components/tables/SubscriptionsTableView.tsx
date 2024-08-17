"use client";
import TableContainer from "@mui/material/TableContainer";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import { SubscriptionsTableColumns } from "~/features/subscriptions/types";

export interface SubscriptionsTableViewProps {
  readonly children: JSX.Element;
  readonly searchBar?: JSX.Element;
  readonly pagination?: JSX.Element;
}

export const SubscriptionsTableView = ({
  children,
  searchBar,
  pagination,
}: SubscriptionsTableViewProps) => (
  <TableView
    header={searchBar}
    footer={pagination}
    contentClassName="max-h-[calc(100%-32px-40px-16px-16px)]"
  >
    <TableContainer sx={{ maxHeight: "100%" }}>
      <DataTableWrapper rowsAreSelectable rowsHaveActions columns={SubscriptionsTableColumns}>
        {children}
      </DataTableWrapper>
    </TableContainer>
  </TableView>
);

export default SubscriptionsTableView;
