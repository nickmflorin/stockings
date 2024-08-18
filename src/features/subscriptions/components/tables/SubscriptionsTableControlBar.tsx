"use client";
import { TableView } from "~/components/tables/TableView";
import type { ComponentProps } from "~/components/types";

export interface SubscriptionsTableFilterBarProps extends ComponentProps {}

export const SubscriptionsTableControlBar = (
  props: SubscriptionsTableFilterBarProps,
): JSX.Element => (
  <TableView.ControlBar {...props}>
    <>Foo</>
  </TableView.ControlBar>
);
