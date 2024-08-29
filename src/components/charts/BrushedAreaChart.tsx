import React, { useMemo, useState, useEffect, useCallback } from "react";

import { type Bounds } from "@visx/brush/lib/types";
import { localPoint } from "@visx/event";
import { Line, Bar } from "@visx/shape";
import { Tooltip, TooltipWithBounds, useTooltip } from "@visx/tooltip";
import { bisector } from "@visx/vendor/d3-array";

import { AbstractAreaChart } from "./AbstractAreaChart";
import { AreaChart, type AreaChartProps } from "./AreaChart";
import { Brush } from "./Brush";
import * as constants from "./constants";

export interface BrushedAreaChartProps<
  D extends constants.ChartDatum,
  S extends constants.ChartRawScales<D>,
  A extends constants.ChartAccessors<D>,
> extends Omit<AreaChartProps<D, S, A>, "yMax" | "ranges" | "width"> {
  readonly tooltipFormatters?: constants.TooltipFormatters<D, A>;
  readonly height: number;
  readonly width: number;
}

export const BrushedAreaChart = <
  D extends constants.ChartDatum,
  S extends constants.ChartRawScales<D>,
  A extends constants.ChartAccessors<D>,
>({
  data,
  accessors,
  tooltipFormatters,
  width,
  height,
  scales,
  ...props
}: BrushedAreaChartProps<D, S, A>) => {
  const { tooltipData, tooltipLeft, tooltipTop, showTooltip, hideTooltip } = useTooltip<D>();

  const [filteredData, setFilteredData] = useState<D[]>(data);

  const innerHeight = height - constants.ChartYAxisVerticalOffset - constants.ChartBottomMargin;

  const topChartHeight = 0.8 * innerHeight;
  const bottomChartHeight = innerHeight - topChartHeight - constants.BrushedChartSeparation;

  const primaryChartRanges = useMemo<constants.ChartRanges>(
    () => ({
      x: [
        0,
        Math.max(width - constants.ChartYAxisHorizontalOffset - constants.ChartRightMargin, 0),
      ] as const,
      y: [topChartHeight, 0],
    }),
    [width, topChartHeight],
  );

  const secondaryChartRanges = useMemo<constants.ChartRanges>(
    () => ({
      x: [
        0,
        Math.max(width - constants.ChartYAxisHorizontalOffset - constants.ChartRightMargin, 0),
      ],
      y: [Math.max(bottomChartHeight - constants.ChartBottomMargin, 0), 0],
    }),
    [width, bottomChartHeight],
  );

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleTooltip = useCallback(
    (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
      const sc = scales(filteredData, primaryChartRanges);

      /* TODO: Cleanup this logic check with the use of a type guard that will only apply the
         tooltip handling if the x scale is of a certain type that has the inversion. */
      if ("invert" in sc.x && typeof sc.x.invert === "function") {
        const xBisector = bisector((d: D) => accessors.x(d)).left;
        const { x } = localPoint(event) || { x: 0 };
        const x0 = sc.x.invert(x - constants.ChartYAxisHorizontalOffset);

        const index = xBisector(filteredData, x0);

        const points = [filteredData[index - 1], filteredData[index]];

        /* TODO: In the future, with less granular data, we will need to determine whether or not
           the hovered event point is closer to the left or right surrounding data points, because
           it will most likely sit in the middle. */
        if (points[0]) {
          showTooltip({
            tooltipData: points[0],
            tooltipLeft: x,
            tooltipTop: (sc.y(accessors.y(points[0])) ?? 0) + constants.ChartYAxisVerticalOffset,
          });
        }
      }
    },
    [filteredData, accessors, primaryChartRanges, scales, showTooltip],
  );

  return (
    <>
      <svg width={width} height={height}>
        <AreaChart
          {...props}
          left={constants.ChartYAxisHorizontalOffset}
          width={width - constants.ChartYAxisHorizontalOffset - constants.ChartRightMargin}
          data={filteredData}
          yMax={primaryChartRanges.y[0]}
          accessors={accessors}
          scales={scales}
          ranges={primaryChartRanges}
        >
          <Bar
            x={constants.ChartYAxisHorizontalOffset}
            width={width - constants.ChartYAxisHorizontalOffset - constants.ChartRightMargin}
            height={innerHeight}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          {tooltipData && (
            <>
              <Line
                from={{ x: tooltipLeft, y: constants.ChartYAxisVerticalOffset }}
                to={{ x: tooltipLeft, y: innerHeight + constants.ChartYAxisVerticalOffset }}
                stroke={constants.CrossHairColor}
                strokeWidth={2}
                pointerEvents="none"
                strokeDasharray="5,2"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill={constants.CrossHairColor}
                stroke="white"
                strokeWidth={2}
                pointerEvents="none"
              />
            </>
          )}
        </AreaChart>
        <AbstractAreaChart
          data={data}
          width={width - constants.ChartYAxisHorizontalOffset - constants.ChartRightMargin}
          left={constants.ChartYAxisHorizontalOffset}
          top={
            constants.ChartYAxisVerticalOffset + topChartHeight + constants.BrushedChartSeparation
          }
          scales={scales}
          ranges={secondaryChartRanges}
          accessors={accessors}
        >
          <Brush
            data={data}
            width={width - constants.ChartYAxisHorizontalOffset - constants.ChartRightMargin}
            left={constants.ChartYAxisHorizontalOffset}
            top={
              constants.ChartYAxisVerticalOffset + topChartHeight + constants.BrushedChartSeparation
            }
            height={secondaryChartRanges.y[0]}
            scales={scales}
            ranges={secondaryChartRanges}
            accessors={accessors}
            onClick={() => setFilteredData(data)}
            onChange={(domain: Bounds | null) => {
              if (!domain) {
                return;
              }
              setFilteredData(
                data.filter(
                  s =>
                    accessors.x(s) > domain.x0 &&
                    accessors.x(s) < domain.x1 &&
                    accessors.y(s) > domain.y0 &&
                    accessors.y(s) < domain.y1,
                ),
              );
            }}
          />
        </AbstractAreaChart>
      </svg>
      {tooltipData && (
        <div>
          <TooltipWithBounds
            key={Math.random()}
            top={(tooltipTop ?? 0) - 12}
            left={(tooltipLeft ?? 0) + 12}
            style={constants.TooltipStyles}
          >
            {tooltipFormatters?.y
              ? tooltipFormatters.y(accessors.y(tooltipData) as constants.InferY<D, A>)
              : accessors.y(tooltipData)}
          </TooltipWithBounds>
          <Tooltip
            top={
              Math.abs(
                (tooltipTop ?? 0) - (topChartHeight + constants.ChartYAxisVerticalOffset - 14),
              ) <= 10
                ? constants.ChartYAxisVerticalOffset + 14
                : topChartHeight + constants.ChartYAxisVerticalOffset - 14
            }
            left={(tooltipLeft ?? 0) + constants.ChartYAxisHorizontalOffset}
            style={{
              ...constants.TooltipStyles,
              minWidth: 72,
              textAlign: "center",
              transform: "translateX(-50%)",
            }}
          >
            {tooltipFormatters?.x
              ? tooltipFormatters.x(accessors.x(tooltipData) as constants.InferX<D, A>)
              : accessors.x(tooltipData)}
          </Tooltip>
        </div>
      )}
    </>
  );
};
