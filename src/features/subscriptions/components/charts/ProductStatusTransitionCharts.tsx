import React, { useMemo } from "react";

import {
  type StatusChangeSubscriptionCondition,
  groupStatusChangeSubscriptionConditions,
} from "~/database/model";

import { type SingleOrArray } from "~/lib/types";

import { ProductStatusTransitionChart } from "./ProductStatusTransitionChart";

const defaultMargin = { top: 5, left: 5, right: 5, bottom: 5 };

export interface ProductStatusTransitionChartsProps {
  readonly width: number;
  readonly height: number;
  readonly margin?: { top: number; right: number; bottom: number; left: number };
  readonly conditions: SingleOrArray<
    Pick<StatusChangeSubscriptionCondition, "fromStatus" | "toStatus">
  >;
}

/* This component is currently under construction and is not yet used in the application.  Ideally,
   we would eventually use something like this to illustrate status change transitions for
   subscription configurations. */
export const ProductStatusTransitionCharts = ({
  conditions,
  width: totalWidth,
  height: totalHeight,
  margin = defaultMargin,
}: ProductStatusTransitionChartsProps) => {
  const grouped = useMemo(() => groupStatusChangeSubscriptionConditions(conditions), [conditions]);

  return (
    <div className="flex flex-col gap-2">
      {grouped.map(([fromStatus, toStatuses], index) => (
        <ProductStatusTransitionChart
          key={index}
          from={fromStatus}
          to={toStatuses}
          width={totalWidth}
          height={totalHeight}
          margin={margin}
        />
      ))}
    </div>
  );
};
