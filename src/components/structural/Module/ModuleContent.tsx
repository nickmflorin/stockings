import type { ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";
import { View, type ViewSizeProps, type ViewProps } from "~/components/structural/View";
import { classNames, type ComponentProps } from "~/components/types";

export interface ModuleContentProps
  extends ViewSizeProps,
    ComponentProps,
    Pick<ViewProps, "component" | "centerChildren"> {
  readonly children: ReactNode;
  readonly isLoading?: boolean;
}

export const ModuleContent = ({ children, isLoading, ...props }: ModuleContentProps) => (
  <View flex column grow {...props} className={classNames("gap-2", props.className)}>
    <Loading isLoading={isLoading}>{children}</Loading>
  </View>
);
