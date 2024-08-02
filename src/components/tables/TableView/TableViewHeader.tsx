import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";

export interface TableViewHeaderProps extends ComponentProps {
  readonly children?: JSX.Element;
}

export const TableViewHeader = ({ children, ...props }: TableViewHeaderProps): JSX.Element =>
  children ? (
    <div {...props} className={classNames("table-view__header", props.className)}>
      {children}
    </div>
  ) : (
    <></>
  );
