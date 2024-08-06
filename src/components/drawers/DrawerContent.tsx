import { type ReactNode } from "react";

import { type ComponentProps, classNames } from "~/components/types";

export interface DrawerContentProps extends ComponentProps {
  readonly children: ReactNode;
}

export const DrawerContent = ({ children, ...props }: DrawerContentProps) => (
  <div {...props} className={classNames("drawer__content", props.className)}>
    {children}
  </div>
);
