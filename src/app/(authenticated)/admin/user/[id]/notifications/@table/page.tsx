import dynamic from "next/dynamic";
import { Suspense } from "react";

import { z } from "zod";

import { parseFilters } from "~/lib/filters";
import { parseOrdering } from "~/lib/ordering";

import {
  ProductNotificationsDefaultOrdering,
  ProductNotificationsFiltersSchemas,
  ProductNotificationsFiltersOptions,
} from "~/actions";

import { Loading } from "~/components/loading/Loading";
import { ProductNotificationsAdminTableColumns } from "~/features/notifications";
import { NotificationsAdminTableControlBarPlaceholder } from "~/features/notifications/components/tables/NotificationsAdminTableControlBarPlaceholder";
import { NotificationsTableFilterBar } from "~/features/notifications/components/tables/NotificationsTableFilterBar";
import { NotificationsTablePaginator } from "~/features/notifications/components/tables/NotificationsTablePaginator";

import { NotificationsTableBody } from "./NotificationsTableBody";

const NotificationsAdminTableView = dynamic(
  () => import("~/features/notifications/components/tables/NotificationsAdminTableView"),
  { loading: () => <Loading isLoading /> },
);

export interface UserNotificationsTablePageProps {
  readonly searchParams: Record<string, string>;
  readonly params: { id: string };
}

export default async function UserNotificationsTablePage({
  searchParams,
  params,
}: UserNotificationsTablePageProps) {
  const page = z.coerce.number().int().positive().min(1).safeParse(searchParams?.page).data ?? 1;

  const filters = parseFilters(
    searchParams,
    ProductNotificationsFiltersSchemas,
    ProductNotificationsFiltersOptions,
  );

  const ordering = parseOrdering(searchParams, {
    defaultOrdering: ProductNotificationsDefaultOrdering,
    fields: ProductNotificationsAdminTableColumns.orderableColumns.map(c => c.id),
  });

  return (
    <NotificationsAdminTableView
      controlBarTargetId="user-notifications-control-bar"
      excludeColumns={["user"]}
      filterBar={
        <Suspense key={JSON.stringify(filters)}>
          <NotificationsTableFilterBar filters={filters} excludeFilters={["users"]} />
        </Suspense>
      }
      pagination={
        <Suspense key={JSON.stringify(filters) + String(page)}>
          <NotificationsTablePaginator
            filters={{ ...filters, users: [params.id] }}
            page={page}
            visibility="admin"
          />
        </Suspense>
      }
    >
      <Suspense
        key={JSON.stringify(filters) + JSON.stringify(ordering) + String(page)}
        fallback={
          /* eslint-disable max-len */
          <>
            <NotificationsAdminTableControlBarPlaceholder targetId="user-notifications-control-bar" />
            <Loading isLoading component="tbody" />
          </>
          /* eslint-enable max-len */
        }
      >
        <NotificationsTableBody
          userId={params.id}
          ordering={ordering}
          page={page}
          filters={filters}
        />
      </Suspense>
    </NotificationsAdminTableView>
  );
}
