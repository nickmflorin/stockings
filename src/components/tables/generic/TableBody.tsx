"use client";
import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import RootTableBody, { type TableBodyProps as RootTableBodyProps } from "@mui/material/TableBody";

import { Loading } from "~/components/loading/Loading";
import { tableHasLoadingIndicator, type TableLoadingIndicator } from "~/components/tables/types";
import { classNames, type QuantitativeSize, type MuiComponentProps } from "~/components/types";

import { TableEmptyState } from "./TableEmptyState";

const TableSkeleton = dynamic(() => import("./TableSkeleton").then(mod => mod.TableSkeleton));

/* eslint-disable-next-line no-console */
const consoleError = console.error;

/* Note:
   -----
   When using the <Loading /> component, as a <tr> element, the loading indicator (an <i> element)
   will be placed inside of the <tr /> element.  This causes React to issue a warning similar to
   the following:

   Warning: validateDOMNesting(...): <i> cannot appear as a child of <tr>.

   However, there does not seem to e anything crtitically (or even mildly) problematic with the
   inclusion of an <i> element inside of the <tr> element - everything seems to be working as
   expected.

   For now, we will assume this is just React being over-sensitive about the structure of the
   DOM, and will ignore this console warning manually.  If we notice issues with it down the line,
   we should remove this suppression and investigate further. */
/* eslint-disable-next-line no-console */
console.error = (msg, ...args) => {
  if (
    typeof msg === "string" &&
    msg.includes("validateDOMNesting(...)") &&
    args.length >= 2 &&
    args[0] === "<i>" &&
    args[1] === "tr"
  ) {
    return;
  }
  consoleError(msg, ...args);
};

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
