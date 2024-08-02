import { type PaginationParams, type OnPaginationChange } from "~/components/pagination";
import { Pagination, type PaginationProps } from "~/components/pagination/Pagination";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";

export interface TableViewFooterProps<P extends PaginationParams> extends ComponentProps {
  readonly children?: JSX.Element;
  readonly pagination?: P;
  readonly paginationProps?: Omit<
    PaginationProps<P>,
    "page" | "pageSize" | "count" | "onChange" | "numPages"
  >;
  readonly onPaginationChange?: OnPaginationChange<P>;
}

export const TableViewFooter = <P extends PaginationParams>({
  children,
  pagination,
  paginationProps,
  onPaginationChange,
  ...props
}: TableViewFooterProps<P>): JSX.Element =>
  children || pagination ? (
    <div {...props} className={classNames("table-view__footer", props.className)}>
      {children}
      {pagination && (
        <Pagination
          {...paginationProps}
          pagination={pagination}
          onChange={params => onPaginationChange?.(params)}
        />
      )}
    </div>
  ) : (
    <></>
  );
