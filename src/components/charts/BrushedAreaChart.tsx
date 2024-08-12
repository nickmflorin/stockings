import React, { useMemo, useState, useEffect } from "react";

import { type Bounds } from "@visx/brush/lib/types";
import { Group } from "@visx/group";
import { scaleTime, scaleLinear } from "@visx/scale";
import { max, extent } from "@visx/vendor/d3-array";

import { AbstractAreaChart } from "./AbstractAreaChart";
import { AreaChart, type AreaChartProps } from "./AreaChart";
import { Brush } from "./Brush";
import * as constants from "./constants";

const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };
const chartSeparation = 30;

export interface BrushedAreaChartProps<D extends constants.ChartDatum>
  extends Omit<AreaChartProps<D>, "scales" | "yMax"> {
  readonly height: number;
}

export const BrushedAreaChart = <D extends constants.ChartDatum>({
  // margin,
  height,
  data,
  accessors,
  ...props
}: BrushedAreaChartProps<D>) => {
  const [filteredData, setFilteredData] = useState<D[]>(data);

  const margins = useMemo(() => constants.parseMargin(), []);

  const innerHeight = height - margins.top - margins.bottom;
  // const topChartBottomMargin = compact ? chartSeparation / 2 : chartSeparation + 10;
  const topChartBottomMargin = chartSeparation + 10;
  const topChartHeight = 0.8 * innerHeight - topChartBottomMargin;
  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation;

  // bounds
  const xMax = Math.max(props.width - margins.left - margins.right, 0);
  const yMax = Math.max(topChartHeight, 0);
  const xBrushMax = Math.max(props.width - brushMargin.left - brushMargin.right, 0);
  const yBrushMax = Math.max(bottomChartHeight - brushMargin.top - brushMargin.bottom, 0);

  const brushScales = useMemo(
    () => ({
      y: scaleLinear({
        range: [yBrushMax, 0],
        domain: [0, max(data, d => accessors.y(d)) || 0],
        nice: true,
      }),
      x: scaleTime<number>({
        range: [0, xBrushMax],
        domain: extent(data, d => accessors.x(d)) as [Date, Date],
      }),
    }),
    [accessors, data, xBrushMax, yBrushMax],
  );

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <Group top={margins.top} left={margins.left} width={props.width - margins.left - margins.right}>
      <AreaChart
        {...props}
        top={margins.top}
        left={margins.left}
        // margin={{ top: 0, left: 0, right: 0, bottom: topChartBottomMargin }}
        data={data}
        yMax={yMax}
        accessors={accessors}
        scales={{
          x: scaleTime<number>({
            range: [0, xMax],
            domain: extent(filteredData, d => accessors.x(d)) as [Date, Date],
          }),
          y: scaleLinear<number>({
            range: [yMax, 0],
            domain: [0, max(filteredData, d => accessors.y(d)) || 0],
            nice: true,
          }),
        }}
      />
      <AbstractAreaChart
        data={data}
        left={margins.left}
        top={margins.top + topChartHeight + topChartBottomMargin}
        scales={brushScales}
        accessors={accessors}
      >
        <Brush
          data={data}
          width={xBrushMax}
          height={yBrushMax}
          scales={brushScales}
          accessors={accessors}
          onClick={() => setFilteredData(data)}
          onChange={(domain: Bounds | null) => {
            if (!domain) {
              return;
            }
            setFilteredData(
              data.filter(
                s =>
                  accessors.x(s).getTime() > domain.x0 &&
                  accessors.x(s).getTime() < domain.x1 &&
                  accessors.y(s) > domain.y0 &&
                  accessors.y(s) < domain.y1,
              ),
            );
          }}
        />
      </AbstractAreaChart>
    </Group>
  );
};
