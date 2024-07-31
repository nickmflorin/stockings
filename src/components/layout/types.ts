import { type Required } from "utility-types";

import { type NavItem } from "~/application/pages";

export interface ILayoutNavItem extends Required<NavItem, "icon"> {
  readonly tooltipLabel: string;
  readonly visible?: boolean;
}
