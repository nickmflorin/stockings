import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";

export interface TableViewHeaderProps extends ComponentProps {
  readonly children?: JSX.Element;
  readonly controlBarTargetId?: string;
}

export const TableViewHeader = ({
  children,
  controlBarTargetId,
  ...props
}: TableViewHeaderProps): JSX.Element =>
  children || controlBarTargetId ? (
    <div {...props} className={classNames("table-view__header", props.className)}>
      {children}
      <div id={controlBarTargetId} />
    </div>
  ) : (
    <div id={controlBarTargetId} />
  );
