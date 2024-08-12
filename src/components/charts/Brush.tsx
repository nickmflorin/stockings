import React, { useId, useRef, useMemo } from "react";

import { Brush as RootBrush } from "@visx/brush";
import { type MarginShape, type Bounds } from "@visx/brush/lib/types";
import { Group } from "@visx/group";
import { PatternLines } from "@visx/pattern";

import type BaseBrush from "@visx/brush/lib/BaseBrush";

import { BrushHandle } from "./BrushHandle";
import * as constants from "./constants";

export interface BrushProps<D extends constants.ChartDatum> {
  readonly data: D[];
  readonly scales: constants.ChartScales;
  readonly accessors: constants.ChartAccessors<D>;
  readonly width: number;
  readonly height: number;
  readonly margin?: MarginShape;
  readonly onClick: () => void;
  readonly onChange: (domain: Bounds | null) => void;
}

export const Brush = <D extends constants.ChartDatum>({
  scales,
  data,
  accessors,
  ...props
}: BrushProps<D>) => {
  const brushRef = useRef<BaseBrush | null>(null);
  const patternId = useId();

  const selectedBrushStyle = {
    fill: `url(#${patternId})`,
    stroke: "white",
  };

  /* const scales = useMemo(
       () => ({
         y: scaleLinear({
           range: [yBrushMax, 0],
           domain: [0, max(data, d => getYValue(d)) || 0],
           nice: true,
         }),
         x: scaleTime<number>({
           range: [0, xBrushMax],
           domain: extent(data, d => getXValue(d)) as [Date, Date],
         }),
       }),
       [],
     ); */

  // TODO: We should instead just hide the brush entirely when there is no data.
  const initialBrushPosition = useMemo(
    () => ({
      start: { x: data.length !== 0 ? scales.x(accessors.x(data[0])) : 0 },
      end: {
        x: data.length !== 0 ? scales.x(accessors.x(data[data.length - 1])) : 0,
      },
    }),
    [scales, accessors, data],
  );

  return (
    <Group>
      <PatternLines
        id={patternId}
        height={8}
        width={8}
        stroke={constants.BrushPatternColor}
        strokeWidth={1}
        orientation={["diagonal"]}
      />
      <RootBrush
        {...props}
        xScale={scales.x}
        yScale={scales.y}
        handleSize={8}
        innerRef={brushRef}
        resizeTriggerAreas={["left", "right"]}
        brushDirection="horizontal"
        initialBrushPosition={initialBrushPosition}
        selectedBoxStyle={selectedBrushStyle}
        useWindowMoveEvents
        renderBrushHandle={props => <BrushHandle {...props} />}
      />
    </Group>
  );
};
