import { type ReactNode } from "react";

import { DrawerButtons } from "~/components/buttons/DrawerButtons";
import { ErrorBoundary } from "~/components/errors/ErrorBoundary";
import { type ComponentProps, classNames } from "~/components/types";

import { DrawerContent } from "./DrawerContent";
import { DrawerHeader } from "./DrawerHeader";

export interface DrawerProps extends ComponentProps {
  readonly children: ReactNode;
}

const LocalDrawer = ({ children, ...props }: DrawerProps): JSX.Element => (
  <div {...props} className={classNames("drawer", props.className)}>
    <ErrorBoundary>{children}</ErrorBoundary>
    <DrawerButtons />
  </div>
);

export const Drawer = Object.assign(LocalDrawer, {
  displayName: "Drawer",
  Content: DrawerContent,
  Header: DrawerHeader,
});

export default Drawer;
