"use client";
import RootTableCell, { type TableCellProps as RootTableCellProps } from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";

import { type IconProp, type IconName } from "~/components/icons";
import type * as types from "~/components/tables/types";
import { type QuantitativeSize, classNames, type MuiComponentProps } from "~/components/types";

export interface TableHeaderCellProps
  extends Omit<MuiComponentProps<RootTableCellProps>, "sortDirection"> {
  readonly icon?: IconProp | IconName;
  readonly isOrderable?: boolean;
  readonly order?: types.TableOrder | null;
  readonly width?: QuantitativeSize<"px">;
  readonly minWidth?: QuantitativeSize<"px">;
  readonly maxWidth?: QuantitativeSize<"px">;
  readonly onSort?: (event: React.MouseEvent<unknown>) => void;
}

export const TableHeaderCell = ({
  icon,
  isOrderable = false,
  order,
  children,
  width,
  minWidth,
  maxWidth,
  onSort,
  ...props
}: TableHeaderCellProps) => (
  <RootTableCell
    {...props}
    className={classNames("table__cell table__header-cell", props.className)}
    sortDirection={isOrderable && order ? order : false}
    sx={[...(Array.isArray(props?.sx) ? props.sx : [props?.sx]), { width, minWidth, maxWidth }]}
  >
    {isOrderable && order !== undefined ? (
      <TableSortLabel
        active={order !== null}
        direction={order !== null ? order : undefined}
        onClick={e => onSort?.(e)}
      >
        {children}
        {order !== null && (
          <span className="hidden">
            {order === "desc" ? "sorted descending" : "sorted ascending"}
          </span>
        )}
      </TableSortLabel>
    ) : (
      children
    )}
  </RootTableCell>
);

export default TableHeaderCell;
