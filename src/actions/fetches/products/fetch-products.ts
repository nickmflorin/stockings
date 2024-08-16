import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import type { ApiProduct } from "~/database/model";
import { enhance } from "~/database/model";
import { conditionalFilters } from "~/database/util";

import {
  constructTableSearchClause,
  PAGE_SIZES,
  type FetchActionContext,
  dataInFetchContext,
  errorInFetchContext,
  type FetchActionResponse,
  type ServerSidePaginationParams,
  clampPagination,
} from "~/actions";

import { type ProductsTableControls } from "~/features/products";

const filtersClause = (filters: Partial<ProductsTableControls["filters"]>) =>
  conditionalFilters([
    filters.search ? constructTableSearchClause("product", filters.search) : undefined,
    filters.categories && filters.categories.length !== 0
      ? { category: { in: filters.categories } }
      : undefined,
    filters.subCategories && filters.subCategories.length !== 0
      ? { subCategories: { hasSome: filters.subCategories } }
      : undefined,
    filters.statuses && filters.statuses.length !== 0
      ? { status: { in: filters.statuses } }
      : undefined,
  ] as const);

const whereClause = ({ filters }: Pick<ProductsTableControls, "filters">) => {
  const clause = filtersClause(filters);
  if (clause.length !== 0) {
    return { AND: clause };
  }
  return undefined;
};

export const fetchProductsPagination = cache(
  async <C extends FetchActionContext>(
    { filters, page: _page }: Pick<ProductsTableControls, "filters" | "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>> => {
    const { error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }
    const count = await db.product.count({
      where: whereClause({ filters }),
    });
    return dataInFetchContext(
      clampPagination({ count, page: _page, pageSize: PAGE_SIZES.product }),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: Pick<ProductsTableControls, "filters" | "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};
export const fetchProducts = cache(
  async <C extends FetchActionContext>(
    { filters, ordering, page: _page }: ProductsTableControls,
    context: C,
  ): Promise<FetchActionResponse<ApiProduct[], C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    const {
      data: { page, pageSize },
    } = await fetchProductsPagination({ filters, page: _page }, { strict: true });

    const products = await enhanced.product.findMany({
      where: whereClause({ filters }),
      orderBy: [{ [ordering.field]: ordering.order }],
      skip: pageSize * (page - 1),
      take: pageSize,
      include: {
        subscriptions: {
          where: { userId: user.id },
        },
      },
    });

    /* The status change subscription is unique on the user and product, so this should only ever
       yield at most 1 result per product. */
    const statusChangeSubscriptions = await enhanced.statusChangeSubscription.findMany({
      where: { userId: user.id, productId: { in: products.map(prod => prod.id) } },
      include: { conditions: true },
    });

    /* The status change subscription is unique on the user and product, so this should only ever
       yield at most 1 result. */
    const priceChangeSubscriptions = await enhanced.priceChangeSubscription.findMany({
      where: { userId: user.id, productId: { in: products.map(prod => prod.id) } },
    });

    return dataInFetchContext(
      products.map(datum => ({
        ...datum,
        priceChangeSubscription:
          priceChangeSubscriptions.find(sub => sub.productId === datum.id) ?? null,
        statusChangeSubscription:
          statusChangeSubscriptions.find(sub => sub.productId === datum.id) ?? null,
      })),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: ProductsTableControls,
    context: C,
  ): Promise<FetchActionResponse<ApiProduct[], C>>;
};
