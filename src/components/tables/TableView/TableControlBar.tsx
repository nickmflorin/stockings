import { type ReactNode, useEffect, useState } from "react";

import { Portal } from "@mui/base/Portal";

import { Checkbox } from "~/components/input/Checkbox";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";

export interface TableControlBarProps extends ComponentProps {
  readonly children: ReactNode;
  readonly allSelected?: boolean;
  readonly onSelectAll?: (v: boolean) => void;
}

export const TableControlBar = ({
  children,
  allSelected = false,
  onSelectAll,
  ...props
}: TableControlBarProps): JSX.Element => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById("table-view-control-bar-portal-target"));
  }, []);

  return (
    <Portal container={container}>
      <div {...props} className={classNames("table-view__control-bar", props.className)}>
        <Checkbox readOnly value={allSelected} onChange={e => onSelectAll?.(e.target.checked)} />
        <div className="table-view__control-bar-actions">{children}</div>
      </div>
    </Portal>
  );
};
