"use client";
import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import RootTableBody, { type TableBodyProps as RootTableBodyProps } from "@mui/material/TableBody";

import { Loading } from "~/components/loading/Loading";
import { tableHasLoadingIndicator, type TableLoadingIndicator } from "~/components/tables/types";
import { classNames, type QuantitativeSize, type MuiComponentProps } from "~/components/types";

import { TableFeedbackState } from "./TableFeedbackState";

const TableSkeleton = dynamic(() => import("./TableSkeleton").then(mod => mod.TableSkeleton));

export type TableBodyProps = MuiComponentProps<RootTableBodyProps<"tbody">> & {
  readonly isLoading?: boolean;
  readonly isEmpty?: boolean;
  readonly isError?: boolean;
  readonly emptyContent?: string | JSX.Element;
  readonly errorTitle?: string;
  readonly errorMessage?: string;
  readonly errorContent?: string | JSX.Element;
  readonly numSkeletonRows?: number;
  readonly numSkeletonColumns?: number;
  readonly cellSkeletons?: ReactNode[];
  readonly skeletonRowHeight?: QuantitativeSize<"px">;
  readonly loadingIndicator?: TableLoadingIndicator;
};

export const TableBody = ({
  children,
  isEmpty,
  isError,
  emptyContent,
  errorMessage,
  errorTitle,
  errorContent,
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
        component={ps => <tr {...ps} className={classNames("tr--loading", ps.className)} />}
        isLoading={isLoading && tableHasLoadingIndicator(loadingIndicator, "spinner")}
      >
        {isError ? (
          <TableFeedbackState
            as="tr"
            stateType="error"
            errorContent={errorContent}
            errorTitle={errorTitle}
            errorMessage={errorMessage}
          />
        ) : isEmpty ? (
          <TableFeedbackState stateType="empty" emptyContent={emptyContent} as="tr" />
        ) : (
          children
        )}
      </Loading>
    )}
  </RootTableBody>
);

export default TableBody;
