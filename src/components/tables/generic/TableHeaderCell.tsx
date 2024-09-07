import type { ReactNode } from "react";
import React from "react";

import { type Order } from "~/lib/ordering";

import { type IconProp, type IconName } from "~/components/icons";
import { SortIcon } from "~/components/icons/SortIcon";
import {
  type QuantitativeSize,
  classNames,
  sizeToString,
  type ComponentProps,
  TextAlignClassNames,
  type TextAlign,
} from "~/components/types";

export interface TableHeaderCellProps extends ComponentProps {
  readonly icon?: IconProp | IconName;
  readonly isOrderable?: boolean;
  readonly order?: Order | null;
  readonly align?: Extract<TextAlign, "left" | "center" | "right">;
  readonly width?: QuantitativeSize<"px">;
  readonly minWidth?: QuantitativeSize<"px">;
  readonly maxWidth?: QuantitativeSize<"px">;
  readonly children?: ReactNode;
  readonly isOrdered?: boolean;
  readonly onClick?: (e: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
  readonly onSort?: (event: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
}

export const TableHeaderCell = ({
  icon,
  isOrderable = false,
  align,
  order,
  children,
  width,
  minWidth,
  maxWidth,
  isOrdered,
  onSort,
  onClick,
  ...props
}: TableHeaderCellProps) => (
  <th
    {...props}
    className={classNames(
      "table__cell table__header-cell",
      {
        "table__header-cell--ordered": isOrdered,
        "pointer-events-auto cursor-pointer":
          onClick !== undefined || (isOrderable && order !== undefined),
      },
      align ? TextAlignClassNames[align] : "",
      props.className,
    )}
    onClick={e => {
      onClick?.(e);
      onSort?.(e);
    }}
    style={{
      ...props.style,
      minWidth: minWidth ? sizeToString(minWidth, "px") : props.style?.minWidth,
      maxWidth: maxWidth ? sizeToString(maxWidth, "px") : props.style?.maxWidth,
      width: width ? sizeToString(width, "px") : props.style?.width,
    }}
  >
    {isOrderable && order !== undefined ? (
      <div className="flex flex-row items-center gap-3">
        {children}
        <SortIcon
          order={order ?? "asc"}
          icon={icon}
          className="table__header-cell__sort-icon"
          size="14px"
        />
      </div>
    ) : (
      children
    )}
  </th>
);

export default TableHeaderCell;
