import React, { type ReactNode } from "react";

import Skeleton from "@mui/material/Skeleton";

import { Table } from "~/components/tables/generic/Table";
import { type TableBodyProps } from "~/components/tables/generic/TableBody";
import type { QuantitativeSize } from "~/components/types";

interface BaseTableSkeletonProps {
  readonly numRows?: number;
  readonly cellSkeletons?: ReactNode[];
  readonly numColumns?: number;
  readonly rowHeight?: QuantitativeSize<"px">;
}

const TableSkeletonInner = ({
  numRows = 25,
  cellSkeletons,
  numColumns = 5,
  rowHeight,
}: BaseTableSkeletonProps) => (
  <>
    {new Array(numRows).fill("").map((e, i) => (
      <Table.BodyRow tabIndex={-1} key={i} height={rowHeight}>
        {(cellSkeletons ?? new Array(numColumns).fill(<Skeleton variant="text" />)).map(
          (skeleton, i) => (
            <Table.BodyCell key={i}>{skeleton}</Table.BodyCell>
          ),
        )}
      </Table.BodyRow>
    ))}
  </>
);

export interface TableSkeletonBodyProps
  extends BaseTableSkeletonProps,
    Omit<TableBodyProps, "children"> {
  readonly component?: "tbody";
}

export interface TableSkeletonFragmentProps extends BaseTableSkeletonProps {
  readonly component: "fragment";
}

export type TableSkeletonProps = TableSkeletonBodyProps | TableSkeletonFragmentProps;

export const TableSkeleton = ({
  cellSkeletons,
  numRows = 25,
  rowHeight,
  numColumns,
  component,
  ...props
}: TableSkeletonProps) =>
  component === "tbody" ? (
    <Table.Body {...props}>
      <TableSkeletonInner
        cellSkeletons={cellSkeletons}
        numColumns={numColumns}
        numRows={numRows}
        rowHeight={rowHeight}
      />
    </Table.Body>
  ) : (
    <TableSkeletonInner
      cellSkeletons={cellSkeletons}
      numColumns={numColumns}
      numRows={numRows}
      rowHeight={rowHeight}
    />
  );
