import { type ReactNode } from "react";

import { useTableOrdering } from "~/components/tables/hooks/use-table-ordering";
import type * as types from "~/components/tables/types";
import { type QuantitativeSize, type ClassName } from "~/components/types";

import { DataTableBody } from "./DataTableBody";
import { type DataTableWrapperProps, DataTableWrapper } from "./DataTableWrapper";

export interface DataTableProps<
  D extends types.DataTableDatum,
  C extends types.DataTableColumn<D> = types.DataTableColumn<D>,
> extends Omit<DataTableWrapperProps<D, C>, "children" | "onSort"> {
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
  readonly getRowId?: (datum: D) => string;
  readonly onRowClick?: (id: string, datum: D) => void;
  readonly onSort?: (
    event: React.MouseEvent<unknown>,
    col: C,
    ordering: types.TableOrdering<types.DataTableField<C>> | null,
  ) => void;
}

export const DataTable = <D extends types.DataTableDatum, C extends types.DataTableColumn<D>>({
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
  ...props
}: DataTableProps<D, C>): JSX.Element => {
  const [_ordering, setOrdering, applyOrderingUpdate] = useTableOrdering<types.DataTableField<C>>();
  const ordering = propOrdering === undefined ? _ordering : propOrdering;

  return (
    <DataTableWrapper<D, C>
      {...props}
      onSort={(e, col) => {
        // Update the internal ordering state.
        setOrdering({ field: col.id as types.DataTableField<C> });
        const updatedOrdering = applyOrderingUpdate(ordering, {
          field: col.id as types.DataTableField<C>,
        });
        props.onSort?.(e, col, updatedOrdering);
      }}
    >
      <DataTableBody<D, C>
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
      />
    </DataTableWrapper>
  );
};
