import { Loading } from "~/components/loading/Loading";
import { type PaginationParams, type OnPaginationChange } from "~/components/pagination";
import type { PaginationProps } from "~/components/pagination/Pagination";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";

import { TableViewFooter } from "./TableViewFooter";
import { TableViewHeader } from "./TableViewHeader";

export interface TableViewProps<P extends PaginationParams> extends ComponentProps {
  readonly children: JSX.Element;
  readonly header?: JSX.Element;
  readonly headerProps?: ComponentProps;
  readonly isLoading?: boolean;
  readonly contentClassName?: ComponentProps["className"];
  readonly footer?: JSX.Element;
  readonly footerProps?: ComponentProps;
  readonly pagination?: P;
  readonly paginationProps?: Omit<
    PaginationProps<P>,
    "page" | "pageSize" | "count" | "numPages" | "onChange"
  >;
  readonly onPaginationChange?: OnPaginationChange<P>;
}

export const TableView = <P extends PaginationParams>({
  children,
  pagination,
  paginationProps,
  contentClassName,
  isLoading = false,
  header,
  footer,
  headerProps,
  footerProps,
  onPaginationChange,
  ...props
}: TableViewProps<P>): JSX.Element => (
  <div
    {...props}
    className={classNames("table-view", { "table-view--loading": isLoading }, props.className)}
  >
    <TableViewHeader {...headerProps}>{header}</TableViewHeader>
    <div className={classNames("table-view__content", contentClassName)}>
      <Loading isLoading={isLoading}>{children}</Loading>
    </div>
    <TableViewFooter
      paginationProps={paginationProps}
      pagination={pagination}
      onPaginationChange={onPaginationChange}
      {...footerProps}
    >
      {footer}
    </TableViewFooter>
  </div>
);
