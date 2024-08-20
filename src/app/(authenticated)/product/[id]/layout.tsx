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
      <div className="flex flex-row gap-[16px] h-[400px]">
        {/* TODO: Revisit these sizes when we make the page responsive. */}
        <div className="flex flex-col gap-[16px] min-w-[600px] max-w-[600px] h-full">
          <Module component="paper" className="h-full">
            <Module.Header title="Price History">
              Historical recorded prices for the product.
            </Module.Header>
            <Module.Content centerChildren height={300} minHeight={300} width={400} minWidth={400}>
              {priceChart}
            </Module.Content>
          </Module>
        </div>
        <div className="flex flex-col gap-[16px] grow min-w-0 h-full">
          <Module component="paper" className="max-h-[500px] h-full">
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
