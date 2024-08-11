import { Loading } from "~/components/loading/Loading";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";

import { TableViewFooter } from "./TableViewFooter";
import { TableViewHeader } from "./TableViewHeader";

export interface TableViewProps extends ComponentProps {
  readonly children: JSX.Element;
  readonly header?: JSX.Element;
  readonly headerProps?: ComponentProps;
  readonly isLoading?: boolean;
  readonly contentClassName?: ComponentProps["className"];
  readonly footer?: JSX.Element;
  readonly footerProps?: ComponentProps;
}

export const TableView = ({
  children,
  contentClassName,
  isLoading = false,
  header,
  footer,
  headerProps,
  footerProps,
  ...props
}: TableViewProps): JSX.Element => (
  <div
    {...props}
    className={classNames("table-view", { "table-view--loading": isLoading }, props.className)}
  >
    <TableViewHeader {...headerProps}>{header}</TableViewHeader>
    <div className={classNames("table-view__content", contentClassName)}>
      <Loading isLoading={isLoading}>{children}</Loading>
    </div>
    <TableViewFooter {...footerProps}>{footer}</TableViewFooter>
  </div>
);
