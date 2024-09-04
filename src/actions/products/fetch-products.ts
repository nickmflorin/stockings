import { cache } from "react";

import { type Optional } from "utility-types";

import { getAuthedUser } from "~/application/auth/server";
import type {
  ApiProduct,
  BrandProduct,
  PriceChangeSubscription,
  ProductIncludes,
  StatusChangeSubscription,
  User,
} from "~/database/model";
import { enhance, fieldIsIncluded } from "~/database/model";
import { db } from "~/database/prisma";
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
  type ProductsControls,
} from "~/actions";

const filtersClause = (filters: Partial<ProductsControls["filters"]>, user: User) =>
  conditionalFilters([
    filters.search ? constructTableSearchClause("product", filters.search) : undefined,
    filters.subscribed ? { subscriptions: { some: { userId: user.id } } } : undefined,
    filters.notified ? { notifications: { some: { userId: user.id } } } : undefined,
    filters.subscriptionTypes && filters.subscriptionTypes.length !== 0
      ? {
          subscriptions: {
            some: { userId: user.id, subscriptionType: { in: filters.subscriptionTypes } },
          },
        }
      : undefined,
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

const whereClause = ({ filters }: Pick<ProductsControls, "filters">, user: User) => {
  const clause = filtersClause(filters, user);
  if (clause.length !== 0) {
    return { AND: clause };
  }
  return undefined;
};

export const fetchProductsCount = cache(
  async <C extends FetchActionContext>(
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>> => {
    const { error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }
    const count = await db.product.count({});
    return dataInFetchContext({ count }, context);
  },
) as {
  <C extends FetchActionContext>(context: C): Promise<FetchActionResponse<{ count: number }, C>>;
};

export const fetchProductsPagination = cache(
  async <C extends FetchActionContext>(
    { filters, page: _page }: Pick<ProductsControls, "filters" | "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }
    const count = await db.product.count({
      where: whereClause({ filters }, user),
    });
    return dataInFetchContext(
      clampPagination({ count, page: _page, pageSize: PAGE_SIZES.product }),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: Pick<ProductsControls, "filters" | "page">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

export const fetchProducts = cache(
  async <C extends FetchActionContext, I extends ProductIncludes>(
    {
      filters,
      ordering,
      page: _page,
      limit,
      includes,
    }: Optional<ProductsControls<I>, "page" | "limit">,
    context: C,
  ): Promise<FetchActionResponse<ApiProduct<I>[], C>> => {
    const { user, error } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    let pagination: Omit<ServerSidePaginationParams, "count"> | null = null;
    if (_page !== undefined) {
      ({ data: pagination } = await fetchProductsPagination(
        { filters, page: _page },
        { strict: true },
      ));
    }

    const products = await enhanced.product.findMany({
      where: whereClause({ filters }, user),
      orderBy: [{ [ordering.orderBy]: ordering.order }],
      skip: pagination ? pagination.pageSize * (pagination.page - 1) : undefined,
      take: pagination
        ? pagination.pageSize
        : limit !== undefined && limit !== 0
          ? limit
          : undefined,
      include: {
        records: fieldIsIncluded("records", includes),
        subscriptions: {
          where: { userId: user.id },
        },
      },
    });

    let statusChangeSubscriptions: StatusChangeSubscription[] | null = null;
    if (fieldIsIncluded("statusChangeSubscription", includes)) {
      /* The status change subscription is unique on the user and product, so this should only ever
         yield at most 1 result per product. */
      statusChangeSubscriptions = await enhanced.statusChangeSubscription.findMany({
        where: { userId: user.id, productId: { in: products.map(prod => prod.id) } },
        include: { conditions: true },
      });
    }

    let priceChangeSubscriptions: PriceChangeSubscription[] | null = null;
    if (fieldIsIncluded("priceChangeSubscription", includes)) {
      /* The status change subscription is unique on the user and product, so this should only ever
         yield at most 1 result per product. */
      priceChangeSubscriptions = await enhanced.priceChangeSubscription.findMany({
        where: { userId: user.id, productId: { in: products.map(prod => prod.id) } },
      });
    }

    return dataInFetchContext(
      products.map((datum: BrandProduct): ApiProduct<I> => {
        const d = datum as ApiProduct<I>;
        return {
          ...d,
          priceChangeSubscription:
            priceChangeSubscriptions !== null
              ? (priceChangeSubscriptions.find(sub => sub.productId === datum.id) ?? null)
              : undefined,
          statusChangeSubscription:
            statusChangeSubscriptions !== null
              ? (statusChangeSubscriptions.find(sub => sub.productId === datum.id) ?? null)
              : undefined,
        };
      }),
      context,
    );
  },
) as {
  <C extends FetchActionContext, I extends ProductIncludes>(
    params: Optional<ProductsControls<I>, "page" | "limit">,
    context: C,
  ): Promise<FetchActionResponse<ApiProduct<I>[], C>>;
};
