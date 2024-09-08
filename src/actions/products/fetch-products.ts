import { type Required } from "utility-types";

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
  type ServerSidePaginationParams,
  clampPagination,
  type ProductsControls,
  visibilityIsAdmin,
  standardFetchAction,
  type StandardFetchActionReturn,
} from "~/actions";

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

export const fetchProductsCount = standardFetchAction(
  async (
    {
      filters,
      visibility,
    }: Required<Pick<ProductsControls, "filters" | "visibility">, "visibility">,
    user,
  ): StandardFetchActionReturn<{ count: number }> => {
    const count = await db.product.count({ where: whereClause({ filters, user, visibility }) });
    return { count };
  },
);

export const fetchProductsPagination = standardFetchAction(
  async (
    {
      filters,
      page,
      visibility,
    }: Required<Pick<ProductsControls, "filters" | "visibility" | "page">, "page" | "visibility">,
    user,
  ): StandardFetchActionReturn<ServerSidePaginationParams> => {
    const count = await db.product.count({
      where: whereClause({ filters, user, visibility }),
    });
    return clampPagination({ count, page, pageSize: PAGE_SIZES.product });
  },
);

export const fetchProducts = <I extends ProductIncludes>(includes: I) =>
  standardFetchAction(
    async (
      { filters, ordering, page, limit, visibility }: Omit<ProductsControls<I>, "includes">,
      user,
    ): StandardFetchActionReturn<ApiProduct<I>[]> => {
      const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

      let pagination: Omit<ServerSidePaginationParams, "count"> | null = null;
      if (page !== undefined) {
        ({ data: pagination } = await fetchProductsPagination(
          { filters, page, visibility },
          { strict: true },
        ));
      }

      const products = await enhanced.product.findMany({
        where: whereClause({ filters, user, visibility }),
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
        /* The status change subscription is unique on the user and product, so this should only
           ever yield at most 1 result per product. */
        statusChangeSubscriptions = await enhanced.statusChangeSubscription.findMany({
          where: { userId: user.id, productId: { in: products.map(prod => prod.id) } },
          include: { conditions: true },
        });
      }

      let priceChangeSubscriptions: PriceChangeSubscription[] | null = null;
      if (fieldIsIncluded("priceChangeSubscription", includes)) {
        /* The status change subscription is unique on the user and product, so this should only
           ever yield at most 1 result per product. */
        priceChangeSubscriptions = await enhanced.priceChangeSubscription.findMany({
          where: { userId: user.id, productId: { in: products.map(prod => prod.id) } },
        });
      }

      return products.map((datum: BrandProduct): ApiProduct<I> => {
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
      });
    },
  );
