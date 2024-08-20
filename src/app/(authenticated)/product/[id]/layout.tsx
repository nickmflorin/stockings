import { type ReactNode } from "react";

import { Module } from "~/components/structural/Module";

interface ProductLayoutProps {
  readonly priceChart: ReactNode;
  readonly detail: ReactNode;
  readonly subscriptions: ReactNode;
}

export default function ProductLayout({ priceChart, detail, subscriptions }: ProductLayoutProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-row items-center">
        <Module component="paper" width="parent">
          {detail}
        </Module>
      </div>
      <div className="flex flex-row gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <Module component="paper">{priceChart}</Module>
        </div>
        <div className="flex flex-col gap-[16px]">
          <Module component="paper" className="max-h-[500px]">
            <Module.Header title="Subscriptions">
              Your current subscriptions to the product.
            </Module.Header>
            <Module.Content>{subscriptions}</Module.Content>
          </Module>
        </div>
      </div>
    </div>
  );
}
