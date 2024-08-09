"use client";
import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import RootTableBody, { type TableBodyProps as RootTableBodyProps } from "@mui/material/TableBody";

import { Loading } from "~/components/loading/Loading";
import { tableHasLoadingIndicator, type TableLoadingIndicator } from "~/components/tables/types";
import { classNames, type QuantitativeSize, type MuiComponentProps } from "~/components/types";

import { TableEmptyState } from "./TableEmptyState";

const TableSkeleton = dynamic(() => import("./TableSkeleton").then(mod => mod.TableSkeleton));

export type TableBodyProps = MuiComponentProps<RootTableBodyProps<"tbody">> & {
  readonly isLoading?: boolean;
  readonly isEmpty?: boolean;
  readonly emptyState?: ReactNode;
  readonly numSkeletonRows?: number;
  readonly numSkeletonColumns?: number;
  readonly cellSkeletons?: ReactNode[];
  readonly skeletonRowHeight?: QuantitativeSize<"px">;
  readonly loadingIndicator?: TableLoadingIndicator;
};

export const TableBody = ({
  children,
  isEmpty,
  emptyState,
  isLoading,
  cellSkeletons,
  skeletonRowHeight,
  numSkeletonColumns,
  loadingIndicator,
  numSkeletonRows,
  ...props
}: TableBodyProps) => (
  <RootTableBody
    {...props}
    className={classNames(
      "table__body",
      {
        "table__body--loading":
          isLoading && tableHasLoadingIndicator(loadingIndicator, "fade-rows"),
      },
      props.className,
    )}
  >
    {isLoading && tableHasLoadingIndicator(loadingIndicator, "skeleton") ? (
      <TableSkeleton
        component="fragment"
        numRows={numSkeletonRows}
        cellSkeletons={cellSkeletons}
        rowHeight={skeletonRowHeight}
        numColumns={numSkeletonColumns}
      />
    ) : (
      /* See comment towards the top of the file related to the overridden 'console.error'
         method. */
      <Loading
        component={ps => <tr {...ps} />}
        isLoading={isLoading && tableHasLoadingIndicator(loadingIndicator, "spinner")}
      >
        {isEmpty ? <TableEmptyState emptyState={emptyState} as="tr" /> : children}
      </Loading>
    )}
  </RootTableBody>
);

export default TableBody;
