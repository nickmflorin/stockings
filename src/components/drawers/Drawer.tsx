import { type ReactNode } from "react";

import { DrawerButtons } from "~/components/buttons/DrawerButtons";
import { ErrorBoundary } from "~/components/errors/ErrorBoundary";
import { type ComponentProps, classNames } from "~/components/types";

export interface DrawerProps extends ComponentProps {
  readonly children: ReactNode;
}

export const Drawer = ({ children, ...props }: DrawerProps): JSX.Element => (
  <div {...props} className={classNames("drawer", props.className)}>
    <ErrorBoundary>{children}</ErrorBoundary>
    <DrawerButtons />
  </div>
);

export default Drawer;
