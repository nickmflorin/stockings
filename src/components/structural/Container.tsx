import { type ReactNode } from "react";

import { classNames } from "~/components/types";
import {
  type ComponentProps,
  type QuantitativeSize,
  type TailwindBreakpoint,
  TailwindBreakpoints,
  TailwindBreakpointClassNames,
  sizeToString,
} from "~/components/types";

export interface ContainerProps extends ComponentProps {
  readonly children: ReactNode;
  readonly maxWidth?: TailwindBreakpoint | QuantitativeSize<"px">;
}

export const Container = ({ children, maxWidth, ...props }: ContainerProps): JSX.Element => (
  <div
    {...props}
    className={classNames(
      "container",
      TailwindBreakpoints.contains(maxWidth) ? TailwindBreakpointClassNames[maxWidth] : "",
      props.className,
    )}
    style={
      maxWidth && !TailwindBreakpoints.contains(maxWidth)
        ? { ...props.style, maxWidth: sizeToString(maxWidth, "px") }
        : props.style
    }
  >
    {children}
  </div>
);
