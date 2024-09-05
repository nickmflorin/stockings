import { Suspense } from "react";

import { parseOrdering } from "~/lib/ordering";

import { SubscriptionsDefaultOrdering } from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { SubscriptionsTableColumns } from "~/features/subscriptions";
/* eslint-disable-next-line max-len */
import { SubscriptionsTableControlBarPlaceholder } from "~/features/subscriptions/components/tables/SubscriptionsTableControlBarPlaceholder";

import { SubscriptionsTableBody } from "./SubscriptionsTableBody";

export interface SubscriptionsTablePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function SubscriptionsPage({
  searchParams,
  params,
}: SubscriptionsTablePageProps) {
  const ordering = parseOrdering(searchParams, {
    defaultOrdering: SubscriptionsDefaultOrdering,
    fields: SubscriptionsTableColumns.orderableColumns.map(c => c.id),
  });

  return (
    <Suspense
      key={JSON.stringify(ordering) + params.id}
      fallback={
        <>
          <SubscriptionsTableControlBarPlaceholder targetId="product-subscriptions-control-bar" />
          <Loading isLoading component="tbody" />
        </>
      }
    >
      <SubscriptionsTableBody productId={params.id} ordering={ordering} />
    </Suspense>
  );
}
