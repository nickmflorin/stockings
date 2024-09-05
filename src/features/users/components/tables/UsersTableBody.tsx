"use client";
import { useRouter } from "next/navigation";

import { type ApiUser } from "~/database/model";

import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import {
  DataTableBody,
  type DataTableBodyProps,
} from "~/components/tables/data-tables/DataTableBody";
import { UsersTableColumns, type UsersTableColumnId } from "~/features/users";

import { UsersTableColumnProperties } from "./UsersTableColumnProperties";

export interface UsersTableBodyProps
  extends Omit<
    DataTableBodyProps<ApiUser<["notificationsCount", "subscriptionsCount"]>, UsersTableColumnId>,
    "rowIsSelected" | "onRowSelected" | "getRowActions" | "columns" | "onRowClick"
  > {}

export const UsersTableBody = (props: UsersTableBodyProps): JSX.Element => {
  const { push } = useRouter();
  return (
    <DataTableBody
      {...props}
      rowHeight={58}
      columns={convertConfigsToColumns(
        [...UsersTableColumns.columns] as DataTableColumnConfig<
          ApiUser<["notificationsCount", "subscriptionsCount"]>,
          UsersTableColumnId
        >[],
        UsersTableColumnProperties,
      )}
      onRowClick={id => push(`/admin/user/${id}`)}
    />
  );
};

export default UsersTableBody;
