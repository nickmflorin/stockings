import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseFilters } from "~/lib/filters";

import { Loading } from "~/components/loading/Loading";
import { PaginatorPlaceholder } from "~/components/pagination/PaginatorPlaceholder";
import {
  SubscriptionsTableFiltersOptions,
  SubscriptionsTableFiltersSchemas,
} from "~/features/subscriptions";
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
    SubscriptionsTableFiltersSchemas,
    SubscriptionsTableFiltersOptions,
  );

  return (
    <SubscriptionsTableView
      searchBar={
        <Suspense>
          <SubscriptionsTableFilterBar />
        </Suspense>
      }
      pagination={
        <Suspense
          key={JSON.stringify(filters) + String(page) + "_pagination"}
          fallback={<PaginatorPlaceholder />}
        >
          <SubscriptionsTablePaginator filters={filters} />
        </Suspense>
      }
    >
      <Suspense
        key={JSON.stringify(filters) + String(page) + "_body"}
        fallback={<Loading isLoading component="tbody" />}
      >
        <SubscriptionsTableBody filters={filters} page={page} />
      </Suspense>
    </SubscriptionsTableView>
  );
}
