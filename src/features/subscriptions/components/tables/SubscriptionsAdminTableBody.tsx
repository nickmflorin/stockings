"use client";
import { useState, useEffect } from "react";

import { uniqBy } from "lodash-es";

import { type ApiProductSubscription } from "~/database/model";

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
} from "~/features/subscriptions";

import { SubscriptionsTableColumnProperties } from "./SubscriptionsTableColumnProperties";
import { SubscriptionsTableControlBar } from "./SubscriptionsTableControlBar";

export interface SubscriptionsAdminTableBodyProps
  extends Omit<
    DataTableBodyProps<ApiProductSubscription<["conditions"]>, SubscriptionsAdminTableColumnId>,
    "rowIsSelected" | "onRowSelected" | "getRowActions" | "columns"
  > {
  readonly controlBarTargetId: string;
  readonly controlBarTooltipsInPortal?: boolean;
  readonly actions?: Action[];
}

export const SubscriptionsAdminTableBody = ({
  controlBarTargetId,
  controlBarTooltipsInPortal,
  actions,
  ...props
}: SubscriptionsAdminTableBodyProps): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<ApiProductSubscription<["conditions"]>[]>([]);

  useEffect(() => {
    setSelectedRows(curr => props.data.filter(d => curr.map(r => r.id).includes(d.id)));
  }, [props.data]);

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
        columns={convertConfigsToColumns(
          [...SubscriptionsAdminTableColumns.columns] as DataTableColumnConfig<
            ApiProductSubscription<["conditions"]>,
            SubscriptionsAdminTableColumnId
          >[],
          SubscriptionsTableColumnProperties,
        )}
      />
    </>
  );
};

export default SubscriptionsAdminTableBody;
