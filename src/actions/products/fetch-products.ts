import { cache } from "react";

import { type Required } from "utility-types";

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
  type ActionVisibility,
  visibilityIsAdmin,
} from "~/actions";

import { isApiClientError, type ApiClientError, ApiClientGlobalError } from "~/api";

const filtersClause = ({
  filters,
  user,
  visibility,
}: Required<Pick<ProductsControls, "filters" | "visibility">, "visibility"> & {
  readonly user: User;
}) =>
  conditionalFilters([
    filters?.search ? constructTableSearchClause("product", filters.search) : undefined,
    filters?.subscribed ? { subscriptions: { some: { userId: user.id } } } : undefined,
    filters?.notified ? { notifications: { some: { userId: user.id } } } : undefined,
    filters?.subscriptionTypes && filters.subscriptionTypes.length !== 0
      ? {
          subscriptions: {
            some: {
              userId: visibilityIsAdmin(visibility) ? undefined : user.id,
              subscriptionType: { in: filters.subscriptionTypes },
            },
          },
        }
      : undefined,
    filters?.categories && filters?.categories.length !== 0
      ? { category: { in: filters.categories } }
      : undefined,
    filters?.subCategories && filters.subCategories.length !== 0
      ? { subCategories: { hasSome: filters.subCategories } }
      : undefined,
    filters?.statuses && filters.statuses.length !== 0
      ? { status: { in: filters.statuses } }
      : undefined,
  ] as const);

const whereClause = ({
  filters,
  user,
  visibility,
}: Required<Pick<ProductsControls, "filters" | "visibility">, "visibility"> & {
  readonly user: User;
}) => {
  const clause = filtersClause({ filters, user, visibility });
  if (clause.length !== 0) {
    return { AND: clause };
  }
  return undefined;
};

export const fetchProductsCount = cache(
  async <C extends FetchActionContext>(
    {
      filters,
      visibility,
    }: Required<Pick<ProductsControls, "filters" | "visibility">, "visibility">,
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>> => {
    const { error, isAdmin, user } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const count = await db.product.count({ where: whereClause({ filters, user, visibility }) });
    return dataInFetchContext({ count }, context);
  },
) as {
  <C extends FetchActionContext>(
    params: Required<Pick<ProductsControls, "filters" | "visibility">, "visibility">,
    context: C,
  ): Promise<FetchActionResponse<{ count: number }, C>>;
};

export const fetchProductsPagination = cache(
  async <C extends FetchActionContext>(
    {
      filters,
      page,
      visibility,
    }: Required<Pick<ProductsControls, "filters" | "visibility" | "page">, "page" | "visibility">,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>> => {
    const { user, error, isAdmin } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const count = await db.product.count({
      where: whereClause({ filters, user, visibility }),
    });
    return dataInFetchContext(
      clampPagination({ count, page, pageSize: PAGE_SIZES.product }),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    params: Required<
      Pick<ProductsControls, "filters" | "visibility" | "page">,
      "page" | "visibility"
    >,
    context: C,
  ): Promise<FetchActionResponse<ServerSidePaginationParams, C>>;
};

type ActionFn<P extends { visibility: ActionVisibility }, R> = (
  params: P,
  user: User,
) => R | ApiClientError;

const standardFetchAction = <P extends { visibility: ActionVisibility }, R>(fn: ActionFn<P, R>) => {
  const wrapped = async <C extends FetchActionContext>(
    params: P,
    context: C,
  ): Promise<FetchActionResponse<R, C>> => {
    const { error, user, isAdmin } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(params.visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }
    const result = fn(params, user);
    if (isApiClientError(result)) {
      return errorInFetchContext(result, context);
    }
    return dataInFetchContext(result, context);
  };
  return cache(wrapped) as typeof wrapped;
};

export const fetchProducts = (
  async <C extends FetchActionContext, I extends ProductIncludes>(
    { filters, ordering, page, limit, includes, visibility }: ProductsControls<I>,
    context: C,
  ): Promise<FetchActionResponse<ApiProduct<I>[], C>> => {
    const { user, error, isAdmin } = await getAuthedUser();
    if (error) {
      return errorInFetchContext(error, context);
    } else if (visibilityIsAdmin(visibility) && !isAdmin) {
      const error = ApiClientGlobalError.Forbidden({
        message: "The user does not have permission to access this data.",
      });
      return errorInFetchContext(error, context);
    }

    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    let pagination: Omit<ServerSidePaginationParams, "count"> | null = null;
    if (page !== undefined) {
      ({ data: pagination } = await fetchProductsPagination(
        { filters, page, visibility },
        { strict: true },
      ));
    }

    const products = await enhanced.product.findMany({
      where: whereClause({ filters, user }),
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
    params: ProductsControls<I>,
    context: C,
  ): Promise<FetchActionResponse<ApiProduct<I>[], C>>;
};
