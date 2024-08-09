import { type ReactNode } from "react";

import { Header } from "./Header";
import { LayoutContent } from "./LayoutContent";
import { type ILayoutNavItem } from "./types";

export interface LayoutProps {
  readonly children: ReactNode;
  readonly nav: ILayoutNavItem[];
}

export const Layout = ({ children, nav }: LayoutProps): JSX.Element => (
  <div className="layout">
    <header className="header">
      <Header />
    </header>
    <LayoutContent nav={nav}>{children}</LayoutContent>
  </div>
);

export default Layout;
