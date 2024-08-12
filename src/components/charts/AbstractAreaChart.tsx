import React, { useId } from "react";

import { curveNatural } from "@visx/curve";
import { LinearGradient } from "@visx/gradient";
import { Group } from "@visx/group";
import { AreaClosed } from "@visx/shape";
import { type PositionScale } from "@visx/shape/lib/types";

import * as constants from "./constants";

export interface AbstractAreaChartProps<D extends constants.ChartDatum> {
  readonly data: D[];
  readonly scale?: PositionScale;
  readonly accessors: constants.ChartAccessors<D>;
  readonly scales: constants.ChartScales;
  readonly children?: React.ReactNode;
  readonly top?: number;
  readonly left?: number;
  readonly width?: number;
}

export const AbstractAreaChart = <D extends constants.ChartDatum>({
  data,
  top,
  left,
  scales,
  children,
  width,
  accessors,
}: AbstractAreaChartProps<D>) => {
  const gradientId = useId();
  return (
    <Group top={top} left={left} width={width}>
      <LinearGradient
        id={gradientId}
        from={constants.AreaGradientColor}
        fromOpacity={1}
        to={constants.AreaGradientColor}
        toOpacity={0.2}
      />
      <AreaClosed<D>
        data={data}
        x={d => scales.x(accessors.x(d)) || 0}
        y={d => scales.y(accessors.y(d)) || 0}
        yScale={scales.y}
        strokeWidth={1}
        stroke={`url(#${gradientId})`}
        fill={`url(#${gradientId})`}
        curve={curveNatural}
      />
      {children}
    </Group>
  );
};
