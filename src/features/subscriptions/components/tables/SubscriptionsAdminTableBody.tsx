"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { uniqBy } from "lodash-es";

import { arraysHaveSameElements } from "~/lib/arrays";

import type { Action } from "~/components/structural/Actions";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import {
  DataTableBody,
  type DataTableBodyProps,
} from "~/components/tables/data-tables/DataTableBody";
import {
  SubscriptionsAdminTableColumns,
  type SubscriptionsAdminTableColumnId,
  type SubscriptionsTableModel,
} from "~/features/subscriptions";

import { useSubscriptionsTableColumnProperties } from "./hooks/use-column-properties";
import { useSubscriptionsTableRowActions } from "./hooks/use-row-actions";

const SubscriptionsTableControlBar = dynamic(() =>
  import("./SubscriptionsTableControlBar").then(mod => mod.SubscriptionsTableControlBar),
);

export interface SubscriptionsAdminTableBodyProps<M extends SubscriptionsTableModel>
  extends Omit<
    DataTableBodyProps<M, SubscriptionsAdminTableColumnId>,
    "rowIsSelected" | "onRowSelected" | "getRowActions" | "columns"
  > {
  readonly controlBarTargetId: string;
  readonly controlBarTooltipsInPortal?: boolean;
  readonly actions?: Action[];
}

export const SubscriptionsAdminTableBody = <M extends SubscriptionsTableModel>({
  controlBarTargetId,
  controlBarTooltipsInPortal,
  actions,
  ...props
}: SubscriptionsAdminTableBodyProps<M>): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<M[]>([]);

  useEffect(() => {
    setSelectedRows(curr => props.data.filter(d => curr.map(r => r.id).includes(d.id)));
  }, [props.data]);

  const rowActions = useSubscriptionsTableRowActions();

  const columnProperties = useSubscriptionsTableColumnProperties({
    visibility: "admin",
    /* This has to be fixed - this will cause the link to go to the wrong place outside of the
       admin. */
    page: "subscriptions",
  });

  return (
    <>
      <SubscriptionsTableControlBar
        actions={actions}
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
        actionMenuWidth={140}
        {...props}
        rowHeight={58}
        rowIsSelected={datum => selectedRows.map(r => r.id).includes(datum.id)}
        onRowSelected={(datum, isSelected) =>
          setSelectedRows(curr =>
            isSelected ? uniqBy([...curr, datum], d => d.id) : curr.filter(d => d.id !== datum.id),
          )
        }
        getRowActions={(subscription, { setIsOpen }) =>
          rowActions(subscription, { close: e => setIsOpen(false, e) })
        }
        columns={convertConfigsToColumns(
          [...SubscriptionsAdminTableColumns.columns] as DataTableColumnConfig<
            M,
            SubscriptionsAdminTableColumnId
          >[],
          columnProperties,
        )}
      />
    </>
  );
};

export default SubscriptionsAdminTableBody;
