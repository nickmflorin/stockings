import React, { type ReactNode } from "react";

import { humanizeListInSegments } from "~/lib/formatters";

import { Text, type TextProps } from "./Text";

export interface HumanizedListChildrenProps extends TextProps<"div"> {
  readonly children: JSX.Element[];
  readonly conjunction?: "and" | "or";
  readonly delimiter?: string;
  readonly values?: never;
  readonly valueRenderer?: (value: JSX.Element) => ReactNode;
  readonly segmentRenderer?: (segment: string) => ReactNode;
}

export interface HumanizedListValuesProps<T extends ReactNode> extends TextProps<"div"> {
  readonly values: T[];
  readonly children?: never;
  readonly conjunction?: "and" | "or";
  readonly delimiter?: string;
  readonly valueRenderer?: (value: T) => ReactNode;
  readonly segmentRenderer?: (segment: string) => ReactNode;
}

export type HumanizedListProps<T extends ReactNode> =
  | HumanizedListValuesProps<T>
  | HumanizedListChildrenProps;

export const HumanizedList = <T extends ReactNode>({
  children,
  values,
  delimiter = ",",
  valueRenderer,
  segmentRenderer,
  conjunction = "and",
  ...props
}: HumanizedListProps<T>): JSX.Element => {
  const iterable = values ?? children;
  if (iterable.length === 0) {
    return <></>;
  }
  return (
    <Text {...props}>
      {humanizeListInSegments<T | JSX.Element>(iterable, { conjunction, delimiter }).map(
        (segment, index) => {
          if (segment.value) {
            if (valueRenderer) {
              const fn = valueRenderer as (value: T | JSX.Element) => ReactNode;
              return <React.Fragment key={index}>{fn(segment.value)}</React.Fragment>;
            } else if (typeof segment.value === "string" || typeof segment.value === "number") {
              return (
                <Text key={index} component="span">
                  {segment.value}
                </Text>
              );
            }
            return <React.Fragment key={index}>{segment.value}</React.Fragment>;
          } else if (segment.segment) {
            if (segmentRenderer) {
              return (
                <React.Fragment key={index}>{segmentRenderer(segment.segment)}</React.Fragment>
              );
            }
            return (
              <Text key={index} component="span">
                {segment.segment}
              </Text>
            );
          }
          return <></>;
        },
      )}
    </Text>
  );
};
