"use client";
import React from "react";

import { type ProductPriceChartDataPoint } from "~/database/model";

import { BrushedAreaChart } from "~/components/charts/BrushedAreaChart";

export interface PriceLineChartProps {
  readonly data: ProductPriceChartDataPoint[];
  readonly width: number;
  readonly height: number;
}

export const PriceLineChart = ({ data, width, height }: PriceLineChartProps) => (
  <div>
    <svg width={width} height={height}>
      <BrushedAreaChart
        data={data}
        width={width}
        height={height}
        accessors={{ x: d => d.date, y: d => d.price }}
      />
    </svg>
  </div>
);

export default PriceLineChart;
