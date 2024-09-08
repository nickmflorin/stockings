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

export interface ProductSubscriptionsTablePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function ProductSubscriptionsTablePage({
  searchParams,
  params,
}: ProductSubscriptionsTablePageProps) {
  const page = z.coerce.number().int().positive().min(1).safeParse(searchParams?.page).data ?? 1;

  const filters = SubscriptionsFiltersObj.parse(searchParams);

  const ordering = parseOrdering(searchParams, {
    defaultOrdering: SubscriptionsDefaultOrdering,
    fields: SubscriptionsAdminTableColumns.orderableColumns.map(c => c.id),
  });

  return (
    <SubscriptionsAdminTableView
      controlBarTargetId="product-subscriptions-control-bar"
      excludeColumns={["product"]}
      filterBar={
        <Suspense>
          <SubscriptionsTableFilterBar excludeProducts />
        </Suspense>
      }
      pagination={
        <SubscriptionsTablePaginator
          filters={{ ...filters, products: [params.id] }}
          page={page}
          visibility="public"
        />
      }
    >
      <Suspense
        key={JSON.stringify(filters) + JSON.stringify(ordering) + String(page)}
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
          page={page}
          filters={filters}
        />
      </Suspense>
    </SubscriptionsAdminTableView>
  );
}
