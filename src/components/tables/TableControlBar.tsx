import { type ReactNode, useEffect, useState } from "react";

import { Portal } from "@mui/base/Portal";

import { DeleteButton } from "~/components/buttons/DeleteButton";
import { Tooltip } from "~/components/floating/Tooltip";
import { Checkbox } from "~/components/input/Checkbox";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";
import { Text } from "~/components/typography";

interface TableControlBarDeleteConfirmationRenderProps<T> {
  readonly isOpen: boolean;
  readonly rows: T[];
  readonly onClose: () => void;
  readonly onSuccess: () => void;
  readonly onCancel: () => void;
}

const DefaultDeleteConfirmationModal = () => <></>;

export interface TableControlBarProps<T> extends ComponentProps {
  readonly children: ReactNode;
  readonly allRowsAreSelected?: boolean;
  readonly selectionIsDisabled?: boolean;
  readonly selectedRows: T[];
  readonly targetId: string;
  readonly canDeleteRows?: boolean;
  readonly deleteTooltipContent?: string | ((numRows: number) => string);
  readonly onSelectAllRows?: (v: boolean) => void;
  readonly confirmationModal?:
    | React.ComponentType<TableControlBarDeleteConfirmationRenderProps<T>>
    | ((props: TableControlBarDeleteConfirmationRenderProps<T>) => JSX.Element);
}

export const TableControlBar = <T,>({
  children,
  targetId,
  allRowsAreSelected = false,
  selectedRows,
  selectionIsDisabled = false,
  canDeleteRows = false,
  confirmationModal = DefaultDeleteConfirmationModal,
  deleteTooltipContent = (numRows: number) => `Delete ${numRows} selected rows.`,
  onSelectAllRows,
  ...props
}: TableControlBarProps<T>): JSX.Element => {
  const [confirmationModalIsOpen, setConfirmationModelIsOpen] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById(targetId));
  }, [targetId]);

  const ConfirmationModal = confirmationModal;

  return (
    <>
      <Portal container={container}>
        <div {...props} className={classNames("table-view__control-bar", props.className)}>
          <Checkbox
            readOnly
            value={allRowsAreSelected}
            isDisabled={selectionIsDisabled}
            onChange={e => onSelectAllRows?.(e.target.checked)}
          />
          <div className="table-view__control-bar-actions">
            {canDeleteRows && (
              <Tooltip
                placement="top-start"
                offset={{ mainAxis: 6 }}
                content={
                  typeof deleteTooltipContent === "string"
                    ? deleteTooltipContent
                    : deleteTooltipContent(selectedRows.length)
                }
                className="text-sm"
                isDisabled={selectedRows.length === 0}
              >
                <DeleteButton
                  isDisabled={selectedRows.length === 0}
                  onClick={() => setConfirmationModelIsOpen(true)}
                />
              </Tooltip>
            )}
            {children}
            {selectedRows.length !== 0 ? (
              <Text fontWeight="medium">
                {selectedRows.length}{" "}
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
      {confirmationModalIsOpen && selectedRows.length !== 0 && (
        <ConfirmationModal
          isOpen
          rows={selectedRows}
          onClose={() => setConfirmationModelIsOpen(false)}
          onCancel={() => setConfirmationModelIsOpen(false)}
          onSuccess={() => setConfirmationModelIsOpen(false)}
        />
      )}
    </>
  );
};
