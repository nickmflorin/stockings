import type { ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";
import { View, type ViewSizeProps, type ViewProps } from "~/components/structural/View";
import { classNames, type ComponentProps } from "~/components/types";

import { ModuleContent } from "./ModuleContent";
import { ModuleHeader } from "./ModuleHeader";

export interface ModuleProps extends ViewSizeProps, ComponentProps, Pick<ViewProps, "component"> {
  readonly children: ReactNode;
  readonly isLoading?: boolean;
}

const LocalModule = ({ children, isLoading, ...props }: ModuleProps) => (
  <View flex column {...props} className={classNames("gap-2", props.className)}>
    <Loading isLoading={isLoading}>{children}</Loading>
  </View>
);

export const Module = Object.assign(LocalModule, {
  displayName: "Module",
  Header: ModuleHeader,
  Content: ModuleContent,
});
