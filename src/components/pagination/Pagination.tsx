"use client";
import RootPagination, {
  type PaginationProps as RootPaginationProps,
} from "@mui/material/Pagination";

import type * as types from "./types";

import { classNames } from "~/components/types";
import { type MuiComponentProps } from "~/components/types";

export type PaginationProps<P extends types.PaginationParams> = Omit<
  Omit<MuiComponentProps<RootPaginationProps>, "count">,
  "rowsPerPage" | "onChange" | "page" | "count"
> & {
  readonly pagination: P;
  readonly onChange?: types.OnPaginationChange<P>;
};

export const Pagination = <P extends types.PaginationParams>({
  onChange,
  pagination,
  ...props
}: PaginationProps<P>): JSX.Element => (
  <RootPagination
    {...props}
    page={pagination.page}
    className={classNames("pagination", props.className)}
    count={
      pagination.count
        ? Math.ceil(pagination.count / Math.max(pagination.pageSize, 1))
        : pagination.numPages ?? 1
    }
    onChange={(e, page) => {
      let params: types.PaginationChangeParams<P>;
      if (pagination.numPages !== undefined) {
        params = { page } as types.PaginationChangeParams<P>;
      } else {
        /* Right now, we are assuming that pageSize is constant - but we will eventually be able to
           alter the page size, and that will be built into this component. */
        params = { page, pageSize: pagination.pageSize } as types.PaginationChangeParams<P>;
      }
      return onChange?.(params);
    }}
  />
);
