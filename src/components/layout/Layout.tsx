import dynamic from "next/dynamic";
import { type ReactNode } from "react";
import { Suspense } from "react";

import { Header } from "./Header";
import { LayoutNav } from "./LayoutNav";
import { type ILayoutNavItem } from "./types";

// const ToastContainer = dynamic(() => import("./ToastContainer"), { ssr: false });

export interface LayoutProps {
  readonly children: ReactNode;
  readonly nav: ILayoutNavItem[];
}

export const Layout = ({ children, nav }: LayoutProps): JSX.Element => (
  <div className="layout">
    <header className="header">
      {/* <Suspense fallback={<></>}> */}
      <Header />
      {/* </Suspense> */}
    </header>
    <div className="layout__content">
      <LayoutNav items={nav} />
      <main className="content">
        {children}
        {/* <ToastContainer /> */}
      </main>
    </div>
  </div>
);

export default Layout;
