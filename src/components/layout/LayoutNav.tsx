import { LayoutNavAnchor } from "~/components/buttons/LayoutNavAnchor";

import { type ILayoutNavItem } from "./types";

export interface LayoutNavProps {
  readonly items: ILayoutNavItem[];
}

export const LayoutNav = ({ items }: LayoutNavProps): JSX.Element => (
  <div className="layout-nav">
    <div className="flex flex-col gap-[8px] items-center">
      {items
        .filter(item => item.visible !== false)
        .map((item, i) => (
          <LayoutNavAnchor item={item} key={i} />
        ))}
    </div>
  </div>
);
