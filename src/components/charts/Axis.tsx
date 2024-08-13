import React from "react";

import {
  AxisBottom,
  AxisLeft,
  type AxisScale,
  type SharedAxisProps,
  type TickFormatter,
} from "@visx/axis";
import { type ScaleInput } from "@visx/scale";

import * as constants from "./constants";

export interface AxisProps<S extends AxisScale> {
  readonly position: constants.AxisPosition;
  readonly tickFontSize?: number;
  readonly chartWidth?: number;
  readonly numTicks?: number;
  readonly left?: number;
  readonly scale: S;
  readonly top?: number;
  readonly tickFormatter?: TickFormatter<ScaleInput<S>>;
}

const Components = {
  bottom: AxisBottom,
  left: AxisLeft,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
} as const satisfies {
  [key in constants.AxisPosition]: {
    <S extends AxisScale>(props: SharedAxisProps<S>): JSX.Element;
  };
};

export const Axis = <S extends AxisScale>({
  position,
  tickFontSize,
  chartWidth,
  numTicks,
  tickFormatter,
  ...props
}: AxisProps<S>) => {
  const Component = Components[position];
  return (
    <Component
      {...props}
      tickLabelProps={constants.getTickLabelProps(position, { tickFontSize })}
      numTicks={numTicks ?? (chartWidth !== undefined ? (chartWidth > 520 ? 10 : 5) : 10)}
      stroke={constants.AxisColor}
      tickStroke={constants.AxisColor}
      tickFormat={tickFormatter}
    />
  );
};
