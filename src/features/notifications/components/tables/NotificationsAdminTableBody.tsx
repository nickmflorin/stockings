import { useEffect, useState } from "react";

import { uniqBy } from "lodash-es";

import { arraysHaveSameElements } from "~/lib/arrays";

import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import {
  type DataTableBodyProps,
  DataTableBody,
} from "~/components/tables/data-tables/DataTableBody";
import {
  type ProductNotificationsAdminTableColumnId,
  ProductNotificationsAdminTableColumns,
  type ProductNotificationsAdminTableModel,
  productNotificationsTableModelHasUser,
} from "~/features/notifications";
import { UserTile } from "~/features/users/components/UserTile";

import { useNotificationsTableColumnProperties } from "./hooks/use-column-properties";
import { NotificationsAdminTableControlBar } from "./NotificationsAdminTableControlBar";

export interface NotificationsAdminTableBodyProps<M extends ProductNotificationsAdminTableModel>
  extends Omit<
    DataTableBodyProps<M, ProductNotificationsAdminTableColumnId>,
    "rowIsSelected" | "onRowSelected" | "getRowActions" | "columns"
  > {
  readonly controlBarTargetId: string;
  readonly controlBarTooltipsInPortal?: boolean;
}

export const NotificationsAdminTableBody = <M extends ProductNotificationsAdminTableModel>({
  controlBarTargetId,
  controlBarTooltipsInPortal,
  ...props
}: NotificationsAdminTableBodyProps<M>): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<M[]>([]);

  const columnProperties = useNotificationsTableColumnProperties({ visibility: "admin" });

  useEffect(() => {
    setSelectedRows(curr => props.data.filter(d => curr.map(r => r.id).includes(d.id)));
  }, [props.data]);

  return (
    <>
      <NotificationsAdminTableControlBar
        isDisabled={props.isEmpty}
        targetId={controlBarTargetId}
        tooltipsInPortal={controlBarTooltipsInPortal}
        selectedRows={selectedRows}
        allRowsAreSelected={
          props.data.length !== 0 &&
          arraysHaveSameElements(
            selectedRows.map(r => r.id),
            props.data.map(datum => datum.id),
          )
        }
        onSelectAllRows={selected => (selected ? setSelectedRows(props.data) : setSelectedRows([]))}
      />
      <DataTableBody
        emptyContent="There are no notifications."
        noResultsContent="No notifications found for search criteria."
        {...props}
        rowIsSelected={datum => selectedRows.map(r => r.id).includes(datum.id)}
        onRowSelected={(datum, isSelected) =>
          setSelectedRows(curr =>
            isSelected ? uniqBy([...curr, datum], d => d.id) : curr.filter(d => d.id !== datum.id),
          )
        }
        columns={convertConfigsToColumns(
          [...ProductNotificationsAdminTableColumns.columns] as DataTableColumnConfig<
            M,
            ProductNotificationsAdminTableColumnId
          >[],
          {
            ...columnProperties,
            user: {
              cellRenderer: datum => {
                if (productNotificationsTableModelHasUser(datum)) {
                  return <UserTile user={datum.user} />;
                }
                return <></>;
              },
            },
          },
        )}
      />
    </>
  );
};

export default NotificationsAdminTableBody;
