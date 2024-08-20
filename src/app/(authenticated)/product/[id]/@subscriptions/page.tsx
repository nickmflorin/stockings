import dynamic from "next/dynamic";
import { Suspense } from "react";

import { parseOrdering } from "~/lib/ordering";

import { SubscriptionsDefaultOrdering } from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { OrderableSubscriptionsTableColumnIds } from "~/features/subscriptions";
/* eslint-disable-next-line max-len */
import { SubscriptionsTableControlBarPlaceholder } from "~/features/subscriptions/components/tables/SubscriptionsTableControlBarPlaceholder";

import { SubscriptionsTableBody } from "./SubscriptionsTableBody";

const SubscriptionsTableView = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableView"),
  { loading: () => <Loading isLoading /> },
);

export interface SubscriptionsTablePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default function SubscriptionsPage({ searchParams, params }: SubscriptionsTablePageProps) {
  const ordering = parseOrdering(searchParams, {
    defaultOrdering: SubscriptionsDefaultOrdering,
    fields: OrderableSubscriptionsTableColumnIds,
  });

  return (
    <SubscriptionsTableView controlBarTargetId="product-subscriptions-control-bar">
      <Suspense
        key={JSON.stringify(ordering)}
        fallback={
          <>
            <SubscriptionsTableControlBarPlaceholder targetId="product-subscriptions-control-bar" />
            <Loading isLoading component="tbody" />
          </>
        }
      >
        <SubscriptionsTableBody
          productId={params.id}
          ordering={ordering}
          controlBarTargetId="product-subscriptions-control-bar"
        />
      </Suspense>
    </SubscriptionsTableView>
  );
}
