"use client";
import TableContainer from "@mui/material/TableContainer";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import { NotificationsTableColumns } from "~/features/notifications/types";

export interface NotificationsTableViewProps {
  readonly children: JSX.Element;
  readonly filterBar?: JSX.Element;
  readonly pagination?: JSX.Element;
}

export const NotificationsTableView = ({
  children,
  filterBar,
  pagination,
}: NotificationsTableViewProps) => (
  <TableView header={filterBar} footer={pagination}>
    <TableContainer sx={{ maxHeight: "100%", height: "100%" }}>
      <DataTableWrapper columns={NotificationsTableColumns}>{children}</DataTableWrapper>
    </TableContainer>
  </TableView>
);

export default NotificationsTableView;
