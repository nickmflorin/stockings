import type { ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";
import { classNames, type ComponentProps } from "~/components/types";
import { Title, Description } from "~/components/typography";

import { View, type ViewSizeProps } from "./View";

export interface ModuleProps extends ViewSizeProps, ComponentProps {
  readonly title?: ReactNode;
  readonly description?: ReactNode;
  readonly children: ReactNode;
  readonly isLoading?: boolean;
  readonly isDisabled?: true;
  readonly contentProps?: ViewSizeProps & ComponentProps;
}

export const Module = ({
  title,
  description,
  children,
  isDisabled,
  isLoading,
  contentProps,
  ...props
}: ModuleProps) => (
  <View flex column {...props} className={classNames("gap-2", props.className)}>
    <div className="flex flex-col gap-1">
      {typeof title === "string" ? <Title component="h5">{title}</Title> : title}
      {typeof description === "string" ? <Description>{description}</Description> : description}
    </div>
    <View {...contentProps} relative column flex grow isDisabled={isDisabled}>
      <Loading isLoading={isLoading}>{children}</Loading>
    </View>
  </View>
);
