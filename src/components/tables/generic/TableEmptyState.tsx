import { type ReactNode } from "react";

import { Table } from "~/components/tables/generic/Table";
import { type TableBodyProps } from "~/components/tables/generic/TableBody";
import { type TableBodyRowProps } from "~/components/tables/generic/TableBodyRow";
import { Text } from "~/components/typography";

export interface TableEmptyStateRowProps extends TableBodyRowProps {
  readonly emptyState?: ReactNode;
  readonly as: "tr";
}

export interface TableEmptyStateBodyProps extends TableBodyProps {
  readonly emptyState?: ReactNode;
  readonly as?: "tbody";
}

export type TableEmptyStateProps = TableEmptyStateBodyProps | TableEmptyStateRowProps;

const TableEmptyStateInner = ({
  emptyState = "No results were found.",
}: Pick<TableEmptyStateProps, "emptyState">) => (
  <Table.BodyCell colSpan={100} height="100px">
    <div className="h-full w-full flex flex-col items-center justify-center">
      {typeof emptyState === "string" ? (
        <Text className="font-regular text-md text-gray-600">{emptyState}</Text>
      ) : (
        emptyState
      )}
    </div>
  </Table.BodyCell>
);

export const TableEmptyState = ({
  emptyState = "No results were found.",
  as = "tbody",
  ...props
}: TableEmptyStateProps) =>
  as === "tbody" ? (
    <Table.Body {...(props as TableBodyProps)}>
      <Table.BodyRow>
        <TableEmptyStateInner emptyState={emptyState} />
      </Table.BodyRow>
    </Table.Body>
  ) : (
    <Table.BodyRow {...(props as TableBodyRowProps)}>
      <TableEmptyStateInner emptyState={emptyState} />
    </Table.BodyRow>
  );
