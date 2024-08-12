import { type AxisScale } from "@visx/axis";

import { type HexColor } from "~/components/types";

export type ChartDatum = Record<string, unknown>;

export type AxisPosition = "left" | "bottom";

export const AreaGradientColor: HexColor = "#6198e9"; // Blue 600

export const AxisColor: HexColor = "#868e96"; // Gray 600
export const TickLabelFontFamily = "var(--font-inter)";
export const DefaultTickLabelFontSize = 10;

export const BrushHandleFillColor = "#EFEFEF";
export const BrushPatternColor = "#f6acc8";

export type ChartScales = { readonly x: AxisScale<number>; readonly y: AxisScale<number> };

export type ChartAccessors<D extends ChartDatum> = {
  readonly x: (d: D) => Date;
  readonly y: (d: D) => number;
};

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

export type CharMargin =
  | number
  | Partial<{ top: number; right: number; bottom: number; left: number }>;

export const DefaultMargin = 10;

export const parseMargin = (margin?: CharMargin) => ({
  left: typeof margin === "string" || typeof margin === "number" ? margin : (margin?.left ?? 20),
  top:
    typeof margin === "string" || typeof margin === "number"
      ? margin
      : (margin?.top ?? DefaultMargin),
  right:
    typeof margin === "string" || typeof margin === "number"
      ? margin
      : (margin?.right ?? DefaultMargin),
  bottom:
    typeof margin === "string" || typeof margin === "number"
      ? margin
      : (margin?.bottom ?? DefaultMargin),
});
