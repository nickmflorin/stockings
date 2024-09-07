import { Suspense } from "react";

import { parseOrdering } from "~/lib/ordering";

import { SubscriptionsDefaultOrdering } from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { SubscriptionsAdminTableColumns } from "~/features/subscriptions";
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
    fields: SubscriptionsAdminTableColumns.orderableColumns.map(c => c.id),
  });

  return (
    <Suspense
      key={JSON.stringify(ordering) + params.id}
      fallback={
        <>
          <SubscriptionsTableControlBarPlaceholder targetId="user-subscriptions-control-bar" />
          <Loading isLoading component="tbody" />
        </>
      }
    >
      <SubscriptionsTableBody userId={params.id} ordering={ordering} />
    </Suspense>
  );
}
