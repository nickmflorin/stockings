import { type ReactNode } from "react";

import { isFragment } from "react-is";

import { classNames } from "~/components/types";
import {
  sizeToNumber,
  type ComponentProps,
  type QuantitativeSize,
  sizeToString,
} from "~/components/types";

import { Divider, type DividerThickness } from "./Divider";

export interface DivideBaseProps {
  readonly thickness?: DividerThickness;
  readonly children: Exclude<ReactNode, boolean>;
  readonly dividerClassName?: string;
  readonly spacing?: QuantitativeSize<"px">;
}

export interface DivideAsFragmentProps extends DivideBaseProps {
  readonly as?: "fragment";
  readonly className?: never;
  readonly style?: never;
}

export interface DivideAsDivProps extends DivideBaseProps, ComponentProps {
  readonly as: "div";
}

export type DivideProps = DivideAsFragmentProps | DivideAsDivProps;

type ValidChild = Exclude<ReactNode, boolean | null | undefined | React.ReactFragment>;

export const Divide = ({
  dividerClassName,
  spacing,
  thickness,
  as = "fragment",
  children: _children,
  ...props
}: DivideProps): JSX.Element => {
  const Wrapper =
    as === "fragment"
      ? ({ children }: { children: ReactNode }) => <>{children}</>
      : ({ children }: { children: ReactNode }) => (
          <div
            {...props}
            className={classNames("flex flex-col", props.className)}
            style={
              spacing
                ? { ...props.style, gap: sizeToString(sizeToNumber(spacing) / 2, "px") }
                : props.style
            }
          >
            {children}
          </div>
        );

  const childrenArray = (Array.isArray(_children) ? _children : [_children]).filter(
    (child): child is ValidChild => child && !isFragment(child),
  );

  if (childrenArray.length === 0) {
    return <></>;
  } else if (childrenArray.length === 1) {
    return <Wrapper>{childrenArray[0]}</Wrapper>;
  }
  return (
    <Wrapper>
      {childrenArray[0]}
      {childrenArray.slice(1).reduce(
        (acc, child, index) => [
          ...acc,
          <Divider
            key={index}
            className={dividerClassName}
            thickness={thickness}
            style={
              as === "fragment" && spacing
                ? {
                    marginTop: sizeToString(sizeToNumber(spacing) / 2, "px"),
                    marginBottom: sizeToString(sizeToNumber(spacing) / 2, "px"),
                  }
                : undefined
            }
          />,
          child,
        ],
        [] as ValidChild[],
      )}
    </Wrapper>
  );
};
