"use client";

import RootTableContainer, {
  type TableContainerProps as RootTableContainerProps,
  type TableContainerTypeMap,
} from "@mui/material/TableContainer";

export type TableContainerProps<
  D extends React.ElementType = TableContainerTypeMap["defaultComponent"],
  /* eslint-disable-next-line @typescript-eslint/ban-types */
  P = {},
> = RootTableContainerProps<D, P>;

export const TableContainer = <
  D extends React.ElementType = TableContainerTypeMap["defaultComponent"],
  /* eslint-disable-next-line @typescript-eslint/ban-types */
  P = {},
>(
  props: TableContainerProps<D, P>,
) => <RootTableContainer {...props} />;

/**
 * @deprecated
 */
export type TableContainerComponent = {
  <
    D extends React.ElementType = TableContainerTypeMap["defaultComponent"],
    /* eslint-disable-next-line @typescript-eslint/ban-types */
    P = {},
  >(
    props: TableContainerProps<D, P>,
  ): JSX.Element;
};

export default TableContainer;
