import type { ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";
import { View, type ViewSizeProps, type ViewProps } from "~/components/structural/View";
import { classNames, type ComponentProps } from "~/components/types";

import { ModuleHeader } from "./ModuleHeader";

export interface ModuleProps extends ViewSizeProps, ComponentProps, Pick<ViewProps, "component"> {
  readonly title?: ReactNode;
  readonly description?: ReactNode;
  readonly header?: JSX.Element;
  readonly children: ReactNode;
  readonly isLoading?: boolean;
  readonly isDisabled?: true;
  readonly contentProps?: ViewSizeProps & ComponentProps;
}

const LocalModule = ({
  title,
  description,
  children,
  isDisabled,
  isLoading,
  contentProps,
  header,
  ...props
}: ModuleProps) => (
  <View flex column {...props} className={classNames("gap-2", props.className)}>
    {header ? header : <ModuleHeader title={title}>{description}</ModuleHeader>}
    <View {...contentProps} relative column flex grow isDisabled={isDisabled}>
      <Loading isLoading={isLoading}>{children}</Loading>
    </View>
  </View>
);

export const Module = Object.assign(LocalModule, {
  displayName: "Module",
  Header: ModuleHeader,
});
