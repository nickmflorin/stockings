"use client";
import TableContainer from "@mui/material/TableContainer";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import { NotificationsTableColumns } from "~/features/notifications/types";

export interface NotificationsTableViewProps {
  readonly children: JSX.Element;
  readonly searchBar?: JSX.Element;
  readonly pagination?: JSX.Element;
}

export const NotificationsTableView = ({
  children,
  searchBar,
  pagination,
}: NotificationsTableViewProps) => (
  <TableView
    header={searchBar}
    footer={pagination}
    contentClassName="max-h-[calc(100%-32px-40px-16px-16px)]"
  >
    <TableContainer sx={{ maxHeight: "100%" }}>
      <DataTableWrapper columns={NotificationsTableColumns}>{children}</DataTableWrapper>
    </TableContainer>
  </TableView>
);

export default NotificationsTableView;
