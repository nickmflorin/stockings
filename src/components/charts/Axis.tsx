import React from "react";

import { AxisBottom, AxisLeft, type AxisScale } from "@visx/axis";

import * as constants from "./constants";

export interface AxisProps {
  readonly position: constants.AxisPosition;
  readonly tickFontSize?: number;
  readonly chartWidth?: number;
  readonly numTicks?: number;
  readonly scale: AxisScale<number>;
  readonly top?: number;
}

const Components = {
  bottom: AxisBottom,
  left: AxisLeft,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
} as const satisfies { [key in constants.AxisPosition]: React.ComponentType<any> };

export const Axis = ({ position, tickFontSize, chartWidth, numTicks, ...props }: AxisProps) => {
  const Component = Components[position];
  return (
    <Component
      {...props}
      tickLabelProps={constants.getTickLabelProps(position, { tickFontSize })}
      numTicks={numTicks ?? (chartWidth !== undefined ? (chartWidth > 520 ? 10 : 5) : 10)}
      stroke={constants.AxisColor}
      tickStroke={constants.AxisColor}
    />
  );
};
