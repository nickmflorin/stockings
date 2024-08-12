import type { ReactNode } from "react";

import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";
import { Title, Description } from "~/components/typography";

export interface ChartContainerProps extends ComponentProps {
  readonly title?: ReactNode;
  readonly description?: ReactNode;
  readonly children: ReactNode;
}

export const ChartContainer = ({ title, description, children, ...props }: ChartContainerProps) => (
  <div {...props} className={classNames("flex flex-col gap-2", props.className)}>
    <div className="flex flex-col gap-1">
      {typeof title === "string" ? <Title component="h5">{title}</Title> : title}
      {typeof description === "string" ? <Description>{description}</Description> : description}
    </div>
    <div className="flex flex-col grow">{children}</div>
  </div>
);
