import React, { useId, useMemo } from "react";

import { curveNatural } from "@visx/curve";
import { LinearGradient } from "@visx/gradient";
import { Group } from "@visx/group";
import { AreaClosed } from "@visx/shape";

import * as constants from "./constants";

export interface AbstractAreaChartProps<
  D extends constants.ChartDatum,
  S extends constants.ChartRawScales<D>,
  A extends constants.ChartAccessors<D>,
> {
  readonly data: D[];
  readonly accessors: A;
  readonly scales: S;
  readonly children?: React.ReactNode;
  readonly ranges: constants.ChartRanges;
  readonly top?: number;
  readonly left?: number;
  readonly width?: number;
}

export const AbstractAreaChart = <
  D extends constants.ChartDatum,
  S extends constants.ChartRawScales<D>,
  A extends constants.ChartAccessors<D>,
>({
  data,
  top,
  left,
  scales: _scales,
  children,
  width,
  accessors,
  ranges,
}: AbstractAreaChartProps<D, S, A>) => {
  const scales = useMemo(() => _scales(data, ranges), [_scales, ranges, data]);

  const gradientId = useId();
  return (
    <svg>
      <LinearGradient
        width={width}
        id={gradientId}
        from={constants.AreaGradientColor}
        fromOpacity={1}
        to={constants.AreaGradientColor}
        toOpacity={0.2}
      />
      <Group left={left} top={top}>
        <AreaClosed<D>
          width={width}
          data={data}
          x={d => scales.x(accessors.x(d)) || 0}
          y={d => scales.y(accessors.y(d)) || 0}
          yScale={scales.y}
          strokeWidth={1}
          stroke={`url(#${gradientId})`}
          fill={`url(#${gradientId})`}
          curve={curveNatural}
        />
      </Group>
      {children}
    </svg>
  );
};
