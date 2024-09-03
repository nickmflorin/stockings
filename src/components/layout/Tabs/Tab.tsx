"use client";
import RouterLink from "next/link";

import { type LabeledNavItem } from "~/application/pages/types";

import { TabButton } from "~/components/buttons/TabButton";
import { useNavigatable } from "~/hooks";

export interface TabProps {
  readonly item: LabeledNavItem;
}

export const Tab = ({ item }: TabProps) => {
  const { isActive, isPending, setActiveOptimistically, href } = useNavigatable({
    id: item.path,
    item,
  });
  return (
    <TabButton
      href={href}
      element="a"
      icon={item.icon}
      component={RouterLink}
      isPending={isPending}
      isActive={isActive}
      onClick={() => setActiveOptimistically()}
    >
      {item.label}
    </TabButton>
  );
};

export default Tab;
