import { useMemo } from "react";

import Skeleton from "@mui/material/Skeleton";

import { logger } from "~/internal/logger";

import { type Ordering } from "~/lib/ordering";

import { type FloatingContentRenderProps } from "~/components/floating";
import { type ActionsCellProps } from "~/components/tables/cells/ActionsCell";
import { Table } from "~/components/tables/generic/Table";
import type { TableBodyProps } from "~/components/tables/generic/TableBody";
import type * as types from "~/components/tables/types";
import { type ClassName, type QuantitativeSize } from "~/components/types";

import { DataTableBodyRow } from "./DataTableBodyRow";
import { getDatumId } from "./util";

export interface DataTableBodyProps<D extends types.DataTableDatum, I extends string = string>
  extends Omit<TableBodyProps, "cellSkeletons" | "numSkeletonColumns" | "children"> {
  readonly data: D[];
  readonly columns: types.DataTableColumn<D, I>[];
  readonly excludeColumns?: I[];
  readonly ordering?: Ordering<I> | null;
  readonly rowHoveredClassName?: ClassName;
  readonly highlightRowOnHover?: boolean;
  readonly scrollable?: boolean;
  readonly rowHeight?: QuantitativeSize<"px">;
  readonly actionMenuWidth?: ActionsCellProps["menuWidth"];
  readonly getRowId?: (datum: D) => string;
  readonly onRowClick?: (id: string, datum: D) => void;
  readonly rowIsSelected?: (datum: D) => boolean;
  readonly onRowSelected?: (datum: D, isSelected: boolean) => void;
  readonly getRowActions?: (
    datum: D,
    params: Pick<FloatingContentRenderProps, "setIsOpen">,
  ) => types.DataTableRowAction[];
}

export const DataTableBody = <D extends types.DataTableDatum, I extends string>({
  data,
  rowHoveredClassName,
  highlightRowOnHover,
  rowHeight,
  columns,
  ordering,
  actionMenuWidth,
  excludeColumns = [],
  rowIsSelected,
  onRowSelected,
  getRowId,
  onRowClick,
  getRowActions,
  ...props
}: DataTableBodyProps<D, I>): JSX.Element => {
  const processedData = useMemo(() => {
    if (ordering) {
      const col = columns.find(c => c.id === ordering.orderBy);
      if (col == undefined) {
        logger.error(
          `Suspicious State: Cannot order data by field '${ordering.orderBy}' because an associated ` +
            "column with that id does not exist!",
        );
        return data;
      }
      const sortMethod = col.config.sortMethod;
      if (sortMethod) {
        return data.sort((a, b) => sortMethod(ordering.order, a, b));
      }
    }
    return data;
  }, [data, ordering, columns]);

  return (
    <Table.Body
      {...props}
      skeletonRowHeight={props.skeletonRowHeight ?? rowHeight}
      cellSkeletons={columns.map(
        ({ config: { skeleton } }, i) => skeleton ?? <Skeleton key={i} variant="text" />,
      )}
    >
      {processedData.map((datum, index) => {
        const rowId = getDatumId(datum, { index, getRowId });
        return (
          <DataTableBodyRow<D, I>
            datum={datum}
            columns={columns}
            key={rowId}
            height={rowHeight}
            hoveredClassName={rowHoveredClassName}
            highlightOnHover={highlightRowOnHover}
            actionMenuWidth={actionMenuWidth}
            excludeColumns={excludeColumns}
            onClick={() => onRowClick?.(rowId, datum)}
            getRowActions={getRowActions}
            rowIsSelected={rowIsSelected}
            onRowSelected={onRowSelected}
          />
        );
      })}
    </Table.Body>
  );
};
