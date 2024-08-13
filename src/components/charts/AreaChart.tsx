import React, { useMemo } from "react";

import { Group } from "@visx/group";

import { AbstractAreaChart, type AbstractAreaChartProps } from "./AbstractAreaChart";
import { Axis } from "./Axis";
import * as constants from "./constants";

export interface AreaChartProps<
  D extends constants.ChartDatum,
  S extends constants.ChartRawScales<D>,
  A extends constants.ChartAccessors<D>,
> extends AbstractAreaChartProps<D, S, A> {
  readonly width: number;
  readonly yMax: number;
  readonly numTicks?: number;
  readonly tickFormatters?: constants.TickFormatters<D, S>;
}

export const AreaChart = <
  D extends constants.ChartDatum,
  S extends constants.ChartRawScales<D>,
  A extends constants.ChartAccessors<D>,
>({
  children,
  width,
  yMax,
  tickFormatters,
  numTicks = 4,
  data,
  ranges,
  scales: _scales,
  ...props
}: AreaChartProps<D, S, A>) => {
  const scales = useMemo(() => _scales(data, ranges), [_scales, ranges, data]);
  return (
    <AbstractAreaChart
      {...props}
      scales={_scales}
      ranges={ranges}
      data={data}
      width={width - (props.left ?? 0 + constants.ChartYAxisHorizontalOffset)}
      left={props.left ?? 0 + constants.ChartYAxisHorizontalOffset}
      top={constants.ChartYAxisVerticalOffset}
    >
      <Group width={width} left={props.left}>
        <Axis<constants.InferScaleY<D, S>>
          position="left"
          scale={scales.y as constants.InferScaleY<D, S>}
          tickFormatter={tickFormatters?.y}
          top={constants.ChartYAxisVerticalOffset}
        />
        <Axis<constants.InferScaleX<D, S>>
          position="bottom"
          scale={scales.x as constants.InferScaleX<D, S>}
          numTicks={numTicks}
          chartWidth={width}
          top={yMax + constants.ChartYAxisVerticalOffset}
          tickFormatter={tickFormatters?.x}
        />
      </Group>
      {children}
    </AbstractAreaChart>
  );
};
