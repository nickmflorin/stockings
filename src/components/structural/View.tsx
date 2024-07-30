import type { ReactNode } from "react";

import { logger } from "~/internal/logger";

import { classNames } from "~/components/types";
import { type ComponentProps, type Style } from "~/components/types";

type Position = "relative" | "absolute";
type Overflow = "scroll" | "auto" | "hidden" | "visible";
type Fill = "screen" | "parent";

export type ViewComponentRenderProps = {
  readonly children: ReactNode;
  readonly style?: Style;
  readonly className?: string;
};

const DefaultViewComponent: React.ComponentType<ViewComponentRenderProps> = ({
  children,
  ...props
}) => <div {...props}>{children}</div>;

export type ViewProps = ComponentProps & {
  readonly children?: React.ReactNode;
  readonly absolute?: boolean;
  readonly relative?: boolean;
  readonly position?: "relative" | "absolute";
  readonly overflow?: Overflow;
  readonly overflowX?: Overflow;
  readonly overflowY?: Overflow;
  readonly fill?: Fill | null;
  readonly fillParent?: boolean;
  readonly fullScreen?: boolean;
  readonly centerChildren?: boolean;
  readonly component?: React.ComponentType<ViewComponentRenderProps>;
};

const parsePosition = ({
  position,
  absolute,
  relative,
}: Pick<ViewProps, "position" | "absolute" | "relative">): Position => {
  if (position !== undefined) {
    if (absolute !== undefined || relative !== undefined) {
      logger.warn(
        "The props 'absolute' and 'relative' should not be specified on a view when the " +
          "'position' prop is explicitly defined.",
        { absolute, relative, position },
      );
    }
    return position;
  } else if (absolute) {
    if (relative) {
      logger.warn(
        "The props 'absolute' and 'relative' should not both be specified on a view at the " +
          "same time.  The 'absolute' prop will take precedence.",
        { absolute, relative, position },
      );
    }
    return "absolute";
  }
  return "relative";
};

const parseFill = ({
  fill,
  fillParent,
  fullScreen,
}: Pick<ViewProps, "fill" | "fillParent" | "fullScreen">): Fill | null => {
  if (fill !== undefined) {
    if (fillParent !== undefined || fullScreen !== undefined) {
      logger.warn(
        "The props 'fillParent' and 'fullScreen' should not be specified on a view when the " +
          "'fill' prop is explicitly defined.",
        { fill, fillParent, fullScreen },
      );
    }
    return fill;
  } else if (fullScreen) {
    if (fillParent) {
      logger.warn(
        "The props 'fullScreen' and 'fillParent' should not both be specified on a view at the " +
          "same time.  The 'fillParent' prop will take precedence.",
        { fill, fillParent, fullScreen },
      );
      return "parent";
    }
    return "screen";
  } else if (fillParent) {
    return "parent";
  }
  return null;
};

const OverflowClassName = (overflow: Overflow) =>
  classNames({
    "overflow-hidden": overflow === "hidden",
    "overflow-visible": overflow === "visible",
    "overflow-scroll": overflow === "scroll",
    "overflow-auto": overflow === "auto",
  });

const OverflowXClassName = (overflow: Overflow) =>
  classNames({
    "overflow-x-hidden": overflow === "hidden",
    "overflow-x-visible": overflow === "visible",
    "overflow-x-scroll": overflow === "scroll",
    "overflow-x-auto": overflow === "auto",
  });

const OverflowYClassName = (overflow: Overflow) =>
  classNames({
    "overflow-y-hidden": overflow === "hidden",
    "overflow-y-visible": overflow === "visible",
    "overflow-y-scroll": overflow === "scroll",
    "overflow-y-auto": overflow === "auto",
  });

const parseOverflow = ({
  overflow,
  overflowX,
  overflowY,
}: Pick<ViewProps, "overflow" | "overflowX" | "overflowY">): string => {
  if (overflow !== undefined) {
    if (overflowX !== undefined || overflowY !== undefined) {
      logger.warn(
        "The props 'overflowX' and 'overflowY' should not be specified on a view when the " +
          "'overflow' prop is explicitly defined.",
        { overflow, overflowX, overflowY },
      );
    }
    return classNames(OverflowClassName(overflow));
  } else if (overflowX && overflowY) {
    return classNames(OverflowXClassName(overflowX), OverflowYClassName(overflowY));
  } else if (overflowX) {
    return OverflowXClassName(overflowX);
  } else if (overflowY) {
    return OverflowYClassName(overflowY);
  }
  return OverflowClassName("hidden");
};

export const View = ({
  children,
  absolute,
  position,
  relative,
  overflow,
  overflowX,
  overflowY,
  centerChildren,
  fill,
  fillParent,
  fullScreen,
  style,
  className,
  component: Component = DefaultViewComponent,
}: ViewProps) => {
  const _fill = parseFill({ fill, fillParent, fullScreen });
  const _position = parsePosition({ position, absolute, relative });
  return (
    <Component
      style={style}
      className={classNames(
        _position,
        parseOverflow({ overflow, overflowX, overflowY }),
        {
          "h-[100vh] w-[100vw]": _fill === "screen",
          "h-full w-full": _fill === "parent",
          "flex flex-col items-center justify-center": centerChildren,
          "left-0 top-0": _fill !== null && _position === "absolute",
        },
        className,
      )}
    >
      {children}
    </Component>
  );
};
