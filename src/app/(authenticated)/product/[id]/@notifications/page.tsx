import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseOrdering } from "~/lib/ordering";

import {
  ProductNotificationOrderableFields,
  ProductNotificationsDefaultOrdering,
  ProductNotificationsFiltersObj,
} from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { NotificationsTablePaginator } from "~/features/notifications/components/tables//NotificationsTablePaginator";
import { NotificationsTableFilterBar } from "~/features/notifications/components/tables/NotificationsTableFilterBar";

import { NotificationsTableBody } from "./NotificationsTableBody";

const NotificationsTableView = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsTableView"),
  { loading: () => <Loading isLoading /> },
);

export interface ProductNotificationsPageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function ProductNotificationsPage({
  searchParams,
  params,
}: ProductNotificationsPageProps) {
  const page = z.coerce.number().int().positive().min(1).safeParse(searchParams?.page).data ?? 1;

  const filters = ProductNotificationsFiltersObj.parse(searchParams);

  const ordering = parseOrdering(searchParams, {
    defaultOrdering: ProductNotificationsDefaultOrdering,
    fields: [...ProductNotificationOrderableFields],
  });

  return (
    <NotificationsTableView
      excludeColumns={["product"]}
      filterBar={
        <Suspense>
          <NotificationsTableFilterBar
            excludeFilters={["products"]}
            isSearchable={false}
            filters={filters}
          />
        </Suspense>
      }
      pagination={
        <NotificationsTablePaginator
          visibility="public"
          filters={{ ...filters, products: [params.id] }}
          page={page}
        />
      }
    >
      <Suspense
        key={JSON.stringify(filters) + JSON.stringify(ordering) + String(page)}
        fallback={<Loading isLoading component="tbody" />}
      >
        <NotificationsTableBody
          productId={params.id}
          filters={filters}
          page={page}
          ordering={ordering}
        />
      </Suspense>
    </NotificationsTableView>
  );
}
