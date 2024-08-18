import { type ReactNode, useEffect, useState } from "react";

import { Portal } from "@mui/base/Portal";

import { Checkbox } from "~/components/input/Checkbox";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";
import { Text } from "~/components/typography";

export interface TableControlBarProps extends ComponentProps {
  readonly children: ReactNode;
  readonly allRowsAreSelected?: boolean;
  readonly selectionIsDisabled?: boolean;
  readonly numSelectedRows?: number;
  readonly onSelectAllRows?: (v: boolean) => void;
}

export const TableControlBar = ({
  children,
  allRowsAreSelected = false,
  numSelectedRows,
  selectionIsDisabled = false,
  onSelectAllRows,
  ...props
}: TableControlBarProps): JSX.Element => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById("table-view-control-bar-portal-target"));
  }, []);

  return (
    <Portal container={container}>
      <div {...props} className={classNames("table-view__control-bar", props.className)}>
        <Checkbox
          readOnly
          value={allRowsAreSelected}
          isDisabled={selectionIsDisabled}
          onChange={e => onSelectAllRows?.(e.target.checked)}
        />
        <div className="table-view__control-bar-actions">
          {children}
          {numSelectedRows !== undefined && numSelectedRows !== 0 ? (
            <Text fontWeight="medium">
              {numSelectedRows}{" "}
              <Text component="span" fontWeight="regular">
                Selected Rows
              </Text>
            </Text>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Portal>
  );
};
