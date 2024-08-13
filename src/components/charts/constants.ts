import { type ScaleInput } from "@visx/scale";
import { type PositionScale } from "@visx/shape/lib/types";
import { defaultStyles } from "@visx/tooltip";

import { type HexColor } from "~/components/types";

export type ChartDatum = Record<string, unknown>;
export type ChartAxisValue = number;

export type AxisPosition = "left" | "bottom";

export const AreaGradientColor: HexColor = "#6198e9"; // Blue 600

export const BrushedChartSeparation = 30;

export const AxisColor: HexColor = "#868e96"; // Gray 600
export const TickLabelFontFamily = "var(--font-inter)";
export const DefaultTickLabelFontSize = 10;

export const BrushHandleFillColor = "#EFEFEF";
export const BrushPatternColor = "#f6acc8";
export const CrossHairColor = "#75daad";

export const ChartYAxisHorizontalOffset = 40;
export const ChartYAxisVerticalOffset = 10;
export const ChartBottomMargin = 0;
export const ChartRightMargin = 10;

export const TooltipStyles = {
  ...defaultStyles,
};

export const BrushHandleWidth = 8;
export const BrushHandleHeight = 15;

type Cartesian<X, Y = X> = {
  readonly x: X;
  readonly y: Y;
};

export type ChartRange = [number, number];

export type ChartRanges = Cartesian<ChartRange>;

export type ChartScales<
  X extends PositionScale = PositionScale,
  Y extends PositionScale = PositionScale,
> = Cartesian<X, Y>;

export type ChartRawScales<
  D extends ChartDatum,
  X extends PositionScale = PositionScale,
  Y extends PositionScale = PositionScale,
> = (data: D[], ranges: ChartRanges) => Cartesian<X, Y>;

export type ChartAccessors<
  D extends ChartDatum = ChartDatum,
  X extends ChartAxisValue = ChartAxisValue,
  Y extends ChartAxisValue = ChartAxisValue,
> = Cartesian<(d: D) => X, (d: D) => Y>;

export type InferX<D extends ChartDatum, C extends ChartAccessors<D>> = C extends { x: infer Fn }
  ? Fn extends (...args: any[]) => infer R
    ? R extends ChartAxisValue
      ? R
      : never
    : never
  : never;

export type InferScaleX<D extends ChartDatum, S extends ChartRawScales<D>> = S extends (
  data: D[],
  ranges: ChartRanges,
) => infer Scales
  ? Scales extends { x: infer XScale extends PositionScale }
    ? XScale
    : never
  : never;

export type InferY<D extends ChartDatum, C extends ChartAccessors<D>> = C extends { y: infer Fn }
  ? Fn extends (...args: any[]) => infer R
    ? R extends ChartAxisValue
      ? R
      : never
    : never
  : never;

export type InferScaleY<D extends ChartDatum, S extends ChartRawScales<D>> = S extends (
  data: D[],
  ranges: ChartRanges,
) => infer Scales
  ? Scales extends { y: infer XScale extends PositionScale }
    ? XScale
    : never
  : never;

export type TickFormatters<D extends ChartDatum, S extends ChartRawScales<D>> = {
  x: (value: ScaleInput<InferScaleX<D, S>>) => string;
  y: (value: ScaleInput<InferScaleY<D, S>>) => string;
};

export type TooltipFormatters<D extends ChartDatum, A extends ChartAccessors<D>> = Cartesian<
  (value: InferX<D, A>) => string,
  (value: InferY<D, A>) => string
>;

export const StaticAxisTickLabelProps = {
  bottom: {
    textAnchor: "middle" as const,
  },
  left: {
    dx: "-0.25em",
    dy: "0.25em",
    textAnchor: "end" as const,
  },
} as const satisfies { [key in AxisPosition]: Record<string, unknown> };

export const getTickLabelProps = (
  position: AxisPosition,
  { tickFontSize = DefaultTickLabelFontSize }: { readonly tickFontSize?: number },
) => ({
  fontFamily: TickLabelFontFamily,
  fontSize: tickFontSize,
  fill: AxisColor,
  ...StaticAxisTickLabelProps[position],
});
