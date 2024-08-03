import { useMemo } from "react";

import Skeleton from "@mui/material/Skeleton";

import { logger } from "~/internal/logger";

import { Table } from "~/components/tables/generic/Table";
import type { TableBodyProps } from "~/components/tables/generic/TableBody";
import type * as types from "~/components/tables/types";
import { type ClassName, type QuantitativeSize } from "~/components/types";

import { DataTableBodyRow } from "./DataTableBodyRow";
import { getDatumId } from "./util";

export interface DataTableBodyProps<
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D> = types.DataTableColumn<D>,
> extends Omit<TableBodyProps, "cellSkeletons" | "numSkeletonColumns" | "children"> {
  readonly data: D[];
  readonly columns: C[];
  readonly ordering?: types.TableOrdering<types.DataTableField<C>> | null;
  readonly rowHoveredClassName?: ClassName;
  readonly highlightRowOnHover?: boolean;
  readonly scrollable?: boolean;
  readonly rowHeight?: QuantitativeSize<"px">;
  readonly getRowId?: (datum: D) => string;
  readonly onRowClick?: (id: string, datum: D) => void;
}

export const DataTableBody = <D extends types.DataTableDatum, C extends types.DataTableColumn<D>>({
  data,
  rowHoveredClassName,
  highlightRowOnHover,
  rowHeight,
  columns,
  ordering,
  getRowId,
  onRowClick,
  ...props
}: DataTableBodyProps<D, C>): JSX.Element => {
  const processedData = useMemo(() => {
    if (ordering) {
      const col = columns.find(c => c.id === ordering.field);
      if (col == undefined) {
        logger.error(
          `Suspicious State: Cannot order data by field '${ordering.field}' because an associated ` +
            "column with that id does not exist!",
        );
        return data;
      }
      const sortMethod = col.sortMethod;
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
        ({ skeleton }, i) => skeleton ?? <Skeleton key={i} variant="text" />,
      )}
    >
      {processedData.map((datum, index) => {
        const rowId = getDatumId(datum, { index, getRowId });
        return (
          <DataTableBodyRow<D, C>
            datum={datum}
            columns={columns}
            key={rowId}
            height={rowHeight}
            hoveredClassName={rowHoveredClassName}
            highlightOnHover={highlightRowOnHover}
            onClick={() => onRowClick?.(rowId, datum)}
          />
        );
      })}
    </Table.Body>
  );
};
