import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseOrdering } from "~/lib/ordering";

import { SubscriptionsDefaultOrdering, SubscriptionsFiltersObj } from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { SubscriptionsAdminTableColumns } from "~/features/subscriptions";
import { SubscriptionsTableControlBarPlaceholder } from "~/features/subscriptions/components/tables/SubscriptionsTableControlBarPlaceholder";
import { SubscriptionsTableFilterBar } from "~/features/subscriptions/components/tables/SubscriptionsTableFilterBar";
import { SubscriptionsTablePaginator } from "~/features/subscriptions/components/tables/SubscriptionsTablePaginator";

import { SubscriptionsTableBody } from "./SubscriptionsTableBody";

const SubscriptionsAdminTableView = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsAdminTableView"),
  { loading: () => <Loading isLoading /> },
);

export interface UserSubscriptionsTablePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function UserSubscriptionsTablePage({
  searchParams,
  params,
}: UserSubscriptionsTablePageProps) {
  const page = z.coerce.number().int().positive().min(1).safeParse(searchParams?.page).data ?? 1;

  const filters = SubscriptionsFiltersObj.parse(searchParams);

  const ordering = parseOrdering(searchParams, {
    defaultOrdering: SubscriptionsDefaultOrdering,
    fields: SubscriptionsAdminTableColumns.orderableColumns.map(c => c.id),
  });

  return (
    <SubscriptionsAdminTableView
      controlBarTargetId="user-subscriptions-control-bar"
      excludeColumns={["user"]}
      filterBar={
        <Suspense>
          <SubscriptionsTableFilterBar />
        </Suspense>
      }
      pagination={
        <SubscriptionsTablePaginator
          filters={{ ...filters, users: [params.id] }}
          page={page}
          visibility="admin"
        />
      }
    >
      <Suspense
        key={JSON.stringify(filters) + JSON.stringify(ordering) + String(page)}
        fallback={
          <>
            <SubscriptionsTableControlBarPlaceholder targetId="user-subscriptions-control-bar" />
            <Loading isLoading component="tbody" />
          </>
        }
      >
        <SubscriptionsTableBody
          userId={params.id}
          ordering={ordering}
          page={page}
          filters={filters}
        />
      </Suspense>
    </SubscriptionsAdminTableView>
  );
}
