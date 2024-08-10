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

type ViewComponentName = "tbody" | "div";

const DivViewComponent: React.ComponentType<ViewComponentRenderProps> = ({
  children,
  ...props
}) => <div {...props}>{children}</div>;

const TBodyViewComponent: React.ComponentType<ViewComponentRenderProps> = ({
  children,
  ...props
}) => <tbody {...props}>{children}</tbody>;

const ViewComponentMap: {
  [key in ViewComponentName]: React.ComponentType<ViewComponentRenderProps>;
} = {
  tbody: TBodyViewComponent,
  div: DivViewComponent,
};

export type ViewProps = ComponentProps & {
  readonly children?: React.ReactNode;
  readonly absolute?: boolean;
  readonly relative?: boolean;
  readonly position?: "relative" | "absolute";
  readonly overflow?: Overflow;
  readonly overflowX?: Overflow;
  readonly overflowY?: Overflow;
  readonly fill?: Fill | null;
  readonly dim?: boolean;
  readonly fillParent?: boolean;
  readonly fullScreen?: boolean;
  readonly centerChildren?: boolean;
  readonly isDisabled?: boolean;
  readonly component?: React.ComponentType<ViewComponentRenderProps> | ViewComponentName;
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

/* eslint-disable-next-line no-console */
const consoleError = console.error;

/* Note:
   -----
   When using the <Loading /> component, as a <tr> element, the loading indicator (an <i> element)
   will be placed inside of the <tr /> element.  This causes React to issue a warning similar to
   the following:

   Warning: validateDOMNesting(...): <i> cannot appear as a child of <tr>.

   However, there does not seem to e anything crtitically (or even mildly) problematic with the
   inclusion of an <i> element inside of the <tr> element - everything seems to be working as
   expected.

   For now, we will assume this is just React being over-sensitive about the structure of the
   DOM, and will ignore this console warning manually.  If we notice issues with it down the line,
   we should remove this suppression and investigate further. */
/* eslint-disable-next-line no-console */
console.error = (msg, ...args) => {
  if (
    typeof msg === "string" &&
    (msg.includes("validateDOMNesting(...)") || msg.includes("In HTML")) &&
    args.length >= 2 &&
    args[0] === "<i>" &&
    ["tr", "tbody"].includes(args[1])
  ) {
    return;
  } else if (
    typeof msg === "string" &&
    msg.includes("Warning: In HTML, <i> cannot be a child of <tbody>.")
  ) {
    return;
  }
  consoleError(msg, ...args);
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
  component = DivViewComponent,
  dim = false,
  isDisabled = false,
}: ViewProps) => {
  const _fill = parseFill({ fill, fillParent, fullScreen });
  const _position = parsePosition({ position, absolute, relative });

  const Component = typeof component === "string" ? ViewComponentMap[component] : component;
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
          "opacity-30": dim,
          "pointer-events-none": isDisabled,
        },
        className,
      )}
    >
      {children}
    </Component>
  );
};
