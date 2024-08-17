import { useTableOrdering } from "~/components/tables/hooks/use-table-ordering";
import type * as types from "~/components/tables/types";

import { DataTableBody, type DataTableBodyProps } from "./DataTableBody";
import { type DataTableWrapperProps, DataTableWrapper } from "./DataTableWrapper";

export interface DataTableProps<D extends types.DataTableDatum, I extends string = string>
  extends Omit<DataTableWrapperProps<D, I>, "children" | "onSort" | "columns" | "hasActions">,
    Pick<
      DataTableBodyProps<D, I>,
      | "getRowActions"
      | "actionMenuWidth"
      | "onRowClick"
      | "getRowId"
      | "columns"
      | "skeletonRowHeight"
      | "numSkeletonRows"
      | "emptyState"
      | "isEmpty"
      | "isLoading"
      | "rowHeight"
      | "highlightRowOnHover"
      | "rowHoveredClassName"
      | "data"
      | "loadingIndicator"
    > {
  readonly onSort?: (
    event: React.MouseEvent<unknown>,
    col: types.DataTableColumnConfig<D, I>,
    ordering: types.TableOrdering<I> | null,
  ) => void;
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
  actionMenuWidth,
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
        actionMenuWidth={actionMenuWidth}
        onRowClick={onRowClick}
        getRowId={getRowId}
        getRowActions={getRowActions}
      />
    </DataTableWrapper>
  );
};
