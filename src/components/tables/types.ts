import type { ReactNode } from "react";

import { type EnumeratedLiteralsType, enumeratedLiterals } from "enumerated-literals";

import { type IconProp, type IconName } from "~/components/icons";
import type { QuantitativeSize } from "~/components/types";

import { type TableBodyCellProps } from "./generic/TableBodyCell";
import { type TableHeaderCellProps } from "./generic/TableHeaderCell";

export type TableLoadingIndicatorType = "spinner" | "fade-rows" | "skeleton";
export type TableLoadingIndicator = TableLoadingIndicatorType | TableLoadingIndicatorType[];

export const tableHasLoadingIndicator = (
  indicator: TableLoadingIndicator | undefined,
  indicatorType: TableLoadingIndicatorType,
) => (Array.isArray(indicator) ? indicator.includes(indicatorType) : indicator === indicatorType);

export const TableSizes = enumeratedLiterals(["small", "medium", "large"] as const, {});
export type TableSize = EnumeratedLiteralsType<typeof TableSizes>;

export interface DataTableDatum {
  readonly id?: string;
  [key: string]: unknown;
}

export interface DataTableColumn<D extends DataTableDatum> {
  readonly id: string;
  readonly icon?: IconProp | IconName;
  readonly label?: string;
  readonly isOrderable?: boolean;
  readonly props?: Omit<TableHeaderCellProps, "children" | "align" | "id" | "icon" | "isOrderable">;
  readonly align?: TableHeaderCellProps["align"];
  readonly accessor?: Exclude<keyof D, "id">;
  readonly width?: QuantitativeSize<"px">;
  readonly minWidth?: QuantitativeSize<"px">;
  readonly maxWidth?: QuantitativeSize<"px">;
  readonly skeleton?: ReactNode;
  readonly sortMethod?: (order: TableOrder, a: D, b: D) => number;
  readonly cellProps?: (datum: D) => Omit<TableBodyCellProps, "children">;
  readonly cellRenderer?: (datum: D) => ReactNode;
}

export type TableOrder = "asc" | "desc";

// Right now, we are only supporting single column ordering.
export type TableOrdering<I extends string> = { field: I; order: TableOrder };

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type DataTableField<C extends DataTableColumn<any>> = C extends {
  readonly field: infer I extends string;
}
  ? I
  : never;

export type DataTableOptions<D extends DataTableDatum> = {
  readonly getRowId?: (datum: D) => string | number;
};
