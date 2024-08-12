import React from "react";

import type * as constants from "./constants";

import { AbstractAreaChart, type AbstractAreaChartProps } from "./AbstractAreaChart";
import { Axis } from "./Axis";

export interface AreaChartProps<D extends constants.ChartDatum>
  extends Omit<AbstractAreaChartProps<D>, "children"> {
  readonly width: number;
  readonly yMax: number;
}

export const AreaChart = <D extends constants.ChartDatum>({
  width,
  yMax,
  ...props
}: AreaChartProps<D>) => (
  <AbstractAreaChart {...props}>
    <Axis position="left" scale={props.scales.y} />
    <Axis position="bottom" scale={props.scales.x} numTicks={5} chartWidth={width} top={yMax} />
  </AbstractAreaChart>
);
