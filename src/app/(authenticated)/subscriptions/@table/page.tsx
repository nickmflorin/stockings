import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseFilters } from "~/lib/filters";
import { parseOrdering } from "~/lib/ordering";

import {
  SubscriptionsFiltersOptions,
  SubscriptionsFiltersSchemas,
  SubscriptionsDefaultOrdering,
  SubscriptionOrderableFields,
} from "~/actions";

import { Loading } from "~/components/loading/Loading";
/* eslint-disable-next-line max-len */
import { SubscriptionsTableControlBarPlaceholder } from "~/features/subscriptions/components/tables/SubscriptionsTableControlBarPlaceholder";
/* eslint-disable-next-line max-len */
import { SubscriptionsTableFilterBar } from "~/features/subscriptions/components/tables/SubscriptionsTableFilterBar";

import { SubscriptionsTableBody } from "./SubscriptionsTableBody";
import { SubscriptionsTablePaginator } from "./SubscriptionsTablePaginator";

const SubscriptionsTableView = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsTableView"),
  { loading: () => <Loading isLoading /> },
);

export interface SubscriptionsTablePageProps {
  readonly searchParams: Record<string, string>;
}

export default function SubscriptionsTablePage({ searchParams }: SubscriptionsTablePageProps) {
  const page = z.coerce.number().int().positive().min(1).safeParse(searchParams?.page).data ?? 1;

  const filters = parseFilters(
    searchParams,
    SubscriptionsFiltersSchemas,
    SubscriptionsFiltersOptions,
  );

  const ordering = parseOrdering(searchParams, {
    defaultOrdering: SubscriptionsDefaultOrdering,
    fields: [...SubscriptionOrderableFields],
  });

  return (
    <SubscriptionsTableView
      controlBarTargetId="subscriptions-control-bar"
      filterBar={
        <Suspense>
          <SubscriptionsTableFilterBar />
        </Suspense>
      }
      pagination={
        <Suspense key={JSON.stringify(filters) + String(page)}>
          <SubscriptionsTablePaginator filters={filters} page={page} />
        </Suspense>
      }
    >
      <Suspense
        key={JSON.stringify(filters) + JSON.stringify(ordering) + String(page)}
        fallback={
          <>
            <SubscriptionsTableControlBarPlaceholder targetId="subscriptions-control-bar" />
            <Loading isLoading component="tbody" />
          </>
        }
      >
        <SubscriptionsTableBody
          filters={filters}
          page={page}
          ordering={ordering}
          controlBarTargetId="subscriptions-control-bar"
        />
      </Suspense>
    </SubscriptionsTableView>
  );
}
