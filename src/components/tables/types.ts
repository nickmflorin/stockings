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

export type DataTableRowAction = {
  readonly isVisible?: boolean;
  readonly content: ReactNode;
  readonly onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export interface DataTableColumnConfig<D extends DataTableDatum, I extends string = string> {
  readonly id: I;
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
}

export interface DataTableColumn<
  D extends DataTableDatum,
  I extends string = string,
  C extends DataTableColumnConfig<D, I> = DataTableColumnConfig<D, I>,
> {
  readonly id: I;
  readonly config: C;
  readonly cellProps?: (datum: D) => Omit<TableBodyCellProps, "children">;
  readonly cellRenderer?: (datum: D) => ReactNode;
}

type ColumnProperties<
  D extends DataTableDatum,
  I extends string,
  // C extends DataTableColumnConfig<D, I>,
> = Partial<{
  [key in I]: Pick<DataTableColumn<D, I>, "cellProps" | "cellRenderer">;
}>;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type InferColumnDatum<C extends DataTableColumnConfig<any, string>[]> = C extends (infer Ci)[]
  ? /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    Ci extends DataTableColumnConfig<infer D extends DataTableDatum, any>
    ? D
    : never
  : never;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type InferColumnId<C extends DataTableColumnConfig<any, string>[]> = C extends (infer Ci)[]
  ? /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    Ci extends DataTableColumnConfig<any, infer I extends string>
    ? I
    : never
  : never;

export const convertConfigsToColumns = <
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  C extends DataTableColumnConfig<any, string>[],
>(
  configs: C,
  properties: ColumnProperties<InferColumnDatum<C>, InferColumnId<C>>,
): DataTableColumn<InferColumnDatum<C>, InferColumnId<C>>[] =>
  configs.map(
    (config): DataTableColumn<InferColumnDatum<C>, InferColumnId<C>> => ({
      id: config.id as InferColumnId<C>,
      config: config as DataTableColumn<InferColumnDatum<C>, InferColumnId<C>>,
      cellProps: properties[config.id as InferColumnId<C>]?.cellProps,
      cellRenderer: properties[config.id as InferColumnId<C>]?.cellRenderer,
    }),
  );

export type TableOrder = "asc" | "desc";

// Right now, we are only supporting single column ordering.
export type TableOrdering<I extends string> = { field: I; order: TableOrder };

export type DataTableOptions<D extends DataTableDatum> = {
  readonly getRowId?: (datum: D) => string | number;
};
