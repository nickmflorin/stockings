"use client";
import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { useDrawers } from "~/components/drawers/hooks";
import { classNames } from "~/components/types";

import { LayoutNav } from "./LayoutNav";
import { type ILayoutNavItem } from "./types";

const LayoutDrawer = dynamic(() => import("~/components/drawers/LayoutDrawer"), { ssr: false });
const ToastContainer = dynamic(() => import("./ToastContainer"), { ssr: false });

export interface LayoutContentProps {
  readonly children: ReactNode;
  readonly nav: ILayoutNavItem[];
}

export const LayoutContent = ({ children, nav }: LayoutContentProps): JSX.Element => {
  const { drawer } = useDrawers();
  return (
    <div
      className={classNames("layout__content", {
        "layout__content--with-drawer": drawer !== null,
      })}
    >
      <LayoutNav items={nav} />
      <main className="content">
        {children}
        <ToastContainer />
      </main>
      <LayoutDrawer>{drawer}</LayoutDrawer>
    </div>
  );
};

export default LayoutContent;
