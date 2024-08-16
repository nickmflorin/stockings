import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import type { ApiProduct } from "~/database/model";
import { enhance } from "~/database/model";
import { conditionalFilters } from "~/database/util";

import { constructTableSearchClause, PAGE_SIZES } from "~/actions";

import { type ProductsTableControls } from "~/features/products";

import { convertToPlainObject } from "~/api/serialization";

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

export const fetchProductsCount = cache(
  async ({ filters }: Pick<ProductsTableControls, "filters">) => {
    await getAuthedUser({ strict: true });
    return await db.product.count({
      where: whereClause({ filters }),
    });
  },
);

export const fetchProducts = cache(
  async ({ filters, ordering, page }: ProductsTableControls): Promise<ApiProduct[]> => {
    const { user } = await getAuthedUser({ strict: true });
    const enhanced = enhance(db, { user }, { kinds: ["delegate"] });

    const products = await enhanced.product.findMany({
      where: whereClause({ filters }),
      orderBy: [{ [ordering.field]: ordering.order }],
      skip: PAGE_SIZES.product * (Math.max(1, page) - 1),
      take: PAGE_SIZES.product,
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

    return products.map(datum =>
      convertToPlainObject({
        ...datum,
        priceChangeSubscription:
          priceChangeSubscriptions.find(sub => sub.productId === datum.id) ?? null,
        statusChangeSubscription:
          statusChangeSubscriptions.find(sub => sub.productId === datum.id) ?? null,
      }),
    );
  },
);
