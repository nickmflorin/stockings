"use client";
import React from "react";

import { scaleTime, scaleLinear } from "@visx/scale";
import { max, extent } from "@visx/vendor/d3-array";
import { DateTime } from "luxon";

import { type ProductPriceChartDataPoint } from "~/database/model";

import { BrushedAreaChart } from "~/components/charts/BrushedAreaChart";
import type * as constants from "~/components/charts/constants";

export interface ProductPriceAreaChartProps {
  readonly data: ProductPriceChartDataPoint[];
}

const scales = (data: ProductPriceChartDataPoint[], range: constants.ChartRanges) => ({
  x: scaleTime<number>({
    range: range.x,
    domain: extent(data, d => d.date) as [Date, Date],
  }),
  y: scaleLinear<number>({
    range: range.y,
    domain: [0, max(data, d => d.price) || 0],
    nice: true,
  }),
});

const accessors = {
  x: (d: ProductPriceChartDataPoint) => d.date.getTime(),
  y: (d: ProductPriceChartDataPoint) => d.price,
};

export const ProductPriceAreaChart = ({ data }: ProductPriceAreaChartProps) => (
  <BrushedAreaChart<ProductPriceChartDataPoint, typeof scales, typeof accessors>
    data={data}
    accessors={accessors}
    tickFormatters={{
      x: v =>
        v instanceof Date
          ? DateTime.fromJSDate(v).toFormat("MMM d")
          : DateTime.fromMillis(typeof v === "number" ? v : v.valueOf()).toFormat("MMM d"),
      y: v => `$${v}`,
    }}
    tooltipFormatters={{
      x: v => DateTime.fromMillis(v).toFormat("MMM d"),
      y: v => `$${v}`,
    }}
    scales={scales}
  />
);

export default ProductPriceAreaChart;
