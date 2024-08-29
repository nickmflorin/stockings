import { type ReactNode } from "react";

import { useParentSize } from "@visx/responsive";

import { EmptyMessage } from "~/components/feedback/EmptyMessage";
import { View } from "~/components/structural/View";
import { classNames } from "~/components/types";
import { type ComponentProps } from "~/components/types";
import { ShowHide } from "~/components/util";

export interface ChartContainerProps extends ComponentProps {
  readonly children: ReactNode | ((params: { height: number; width: number }) => ReactNode);
  readonly isEmpty?: boolean;
  readonly emptyContent?: string | JSX.Element;
  readonly minHeight?: number;
  readonly minWidth?: number;
}

export const ChartContainer = ({
  children,
  isEmpty,
  emptyContent,
  minHeight = 50,
  minWidth = 50,
  ...props
}: ChartContainerProps): JSX.Element => {
  const { parentRef, width, height } = useParentSize({ debounceTime: 150 });
  return (
    <div {...props} className={classNames("h-full w-full", props.className)} ref={parentRef}>
      <ShowHide show={height > minHeight && width > minWidth}>
        {isEmpty ? (
          <View fill="parent" centerChildren>
            <EmptyMessage>{emptyContent ?? "No data."}</EmptyMessage>
          </View>
        ) : (
          <>{typeof children === "function" ? children({ height, width }) : children}</>
        )}
      </ShowHide>
    </div>
  );
};
