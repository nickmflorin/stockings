import { type ReactNode } from "react";

import { type FloatingContentRenderProps } from "~/components/floating";
import { useTableOrdering } from "~/components/tables/hooks/use-table-ordering";
import type * as types from "~/components/tables/types";
import { type QuantitativeSize, type ClassName } from "~/components/types";

import { DataTableBody } from "./DataTableBody";
import { type DataTableWrapperProps, DataTableWrapper } from "./DataTableWrapper";

export interface DataTableProps<D extends types.DataTableDatum, I extends string = string>
  extends Omit<DataTableWrapperProps<D, I>, "children" | "onSort" | "columns" | "hasActions"> {
  readonly data: D[];
  readonly loadingIndicator?: types.TableLoadingIndicator;
  readonly rowHoveredClassName?: ClassName;
  readonly highlightRowOnHover?: boolean;
  readonly rowHeight?: QuantitativeSize<"px">;
  readonly isLoading?: boolean;
  readonly isEmpty?: boolean;
  readonly emptyState?: ReactNode;
  readonly numSkeletonRows?: number;
  readonly skeletonRowHeight?: QuantitativeSize<"px">;
  readonly columns: types.DataTableColumn<D, I>[];
  readonly getRowId?: (datum: D) => string;
  readonly onRowClick?: (id: string, datum: D) => void;
  readonly onSort?: (
    event: React.MouseEvent<unknown>,
    col: types.DataTableColumnConfig<D, I>,
    ordering: types.TableOrdering<I> | null,
  ) => void;
  readonly getRowActions?: (
    datum: D,
    params: Pick<FloatingContentRenderProps, "setIsOpen">,
  ) => types.DataTableRowAction[];
}

export const DataTable = <D extends types.DataTableDatum, I extends string>({
  data,
  rowHoveredClassName,
  highlightRowOnHover,
  rowHeight,
  ordering: propOrdering,
  numSkeletonRows,
  skeletonRowHeight,
  isEmpty,
  emptyState,
  isLoading,
  loadingIndicator,
  getRowId,
  onRowClick,
  getRowActions,
  ...props
}: DataTableProps<D, I>): JSX.Element => {
  const [_ordering, setOrdering, applyOrderingUpdate] = useTableOrdering<I>();
  const ordering = propOrdering === undefined ? _ordering : propOrdering;

  return (
    <DataTableWrapper<D, I>
      {...props}
      hasActions={getRowActions !== undefined}
      onSort={(e, col) => {
        // Update the internal ordering state.
        setOrdering({ field: col.id });
        const updatedOrdering = applyOrderingUpdate(ordering, {
          field: col.id,
        });
        props.onSort?.(e, col, updatedOrdering);
      }}
    >
      <DataTableBody<D, I>
        isEmpty={isEmpty}
        emptyState={emptyState}
        data={data}
        ordering={ordering}
        columns={props.columns}
        rowHoveredClassName={rowHoveredClassName}
        numSkeletonRows={numSkeletonRows}
        highlightRowOnHover={highlightRowOnHover}
        rowHeight={rowHeight}
        isLoading={isLoading}
        loadingIndicator={loadingIndicator}
        skeletonRowHeight={skeletonRowHeight ?? rowHeight}
        onRowClick={onRowClick}
        getRowId={getRowId}
        getRowActions={getRowActions}
      />
    </DataTableWrapper>
  );
};
