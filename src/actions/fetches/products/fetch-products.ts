import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import type { ApiProduct } from "~/database/model";
import { conditionalFilters } from "~/database/util";

import { constructTableSearchClause, PAGE_SIZES } from "~/actions";

import { type ProductsTableControls } from "~/features/products";

import { convertToPlainObject } from "~/api/serialization";

const filtersClause = (filters: Partial<ProductsTableControls["filters"]>) =>
  conditionalFilters([
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
  if (filters.search && clause.length !== 0) {
    return {
      AND: [constructTableSearchClause("product", filters.search), { OR: clause }],
    };
  } else if (clause.length === 0 && filters.search) {
    return constructTableSearchClause("product", filters.search);
  } else if (clause.length !== 0 && !filters.search) {
    return {
      OR: clause,
    };
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
    const data = await db.product.findMany({
      where: whereClause({ filters }),
      orderBy: [{ [ordering.field]: ordering.order }],
      skip: PAGE_SIZES.product * (Math.max(1, page) - 1),
      take: PAGE_SIZES.product,
      include: {
        subscriptions: {
          where: { userId: user.id },
          include: {
            statusChange: { include: { conditions: { orderBy: [{ createdAt: "asc" }] } } },
            priceChange: true,
          },
        },
      },
    });
    return data.map(datum =>
      convertToPlainObject({
        ...datum,
        subscription: datum.subscriptions.length === 0 ? null : datum.subscriptions[0],
      }),
    );
  },
);
