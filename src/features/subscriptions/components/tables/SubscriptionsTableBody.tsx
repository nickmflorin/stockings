"use client";
import dynamic from "next/dynamic";
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
  SubscriptionsTableColumns,
  type SubscriptionsTableColumnId,
} from "~/features/subscriptions";

import { useSubscriptionsTableColumnProperties } from "./hooks/use-column-properties";
import { useSubscriptionsTableRowActions } from "./hooks/use-row-actions";

const SubscriptionsTableControlBar = dynamic(() =>
  import("./SubscriptionsTableControlBar").then(mod => mod.SubscriptionsTableControlBar),
);

export interface SubscriptionsTableBodyProps
  extends Omit<
    DataTableBodyProps<
      ApiProductSubscription<["conditions", "notificationsCount", "product"]>,
      SubscriptionsTableColumnId
    >,
    "rowIsSelected" | "onRowSelected" | "getRowActions" | "columns"
  > {
  readonly page: "subscriptions" | "product-detail";
  readonly controlBarTargetId: string;
  readonly controlBarTooltipsInPortal?: boolean;
  readonly actions?: Action[];
}

export const SubscriptionsTableBody = ({
  controlBarTargetId,
  controlBarTooltipsInPortal,
  actions,
  page,
  ...props
}: SubscriptionsTableBodyProps): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<
    ApiProductSubscription<["conditions", "notificationsCount", "product"]>[]
  >([]);

  const columnProperties = useSubscriptionsTableColumnProperties({ visibility: "public", page });
  const rowActions = useSubscriptionsTableRowActions();

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
        columns={convertConfigsToColumns(
          [...SubscriptionsTableColumns.columns] as DataTableColumnConfig<
            ApiProductSubscription<["conditions", "notificationsCount", "product"]>,
            SubscriptionsTableColumnId
          >[],
          columnProperties,
        )}
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
      />
    </>
  );
};

export default SubscriptionsTableBody;
