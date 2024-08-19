import { cache } from "react";

import type { ProductPriceChartDataPoint } from "~/database/model";
import { db } from "~/database/prisma";

import {
  dataInFetchContext,
  errorInFetchContext,
  type FetchActionContext,
  type FetchActionResponse,
} from "~/actions";

import { ApiClientGlobalError } from "~/api";

export const fetchProductPriceData = cache(
  async <C extends FetchActionContext>(
    id: string,
    context: C,
  ): Promise<FetchActionResponse<ProductPriceChartDataPoint[], C>> => {
    const product = await db.product.findUnique({ where: { id } });
    if (!product) {
      const err = ApiClientGlobalError.NotFound({});
      return errorInFetchContext(err, context);
    }
    /* TODO: We may want to eventually include all records, so that we can show the full
     record history in the chart (even when the price failed to scrape). */
    const data = await db.productRecord.findMany({
      where: { productId: id, price: { not: null } },
      orderBy: [{ createdAt: "asc" }],
    });
    return dataInFetchContext(
      data.map(record => ({ date: record.createdAt, price: record.price as number })),
      context,
    );
  },
) as {
  <C extends FetchActionContext>(
    id: string,
    context: C,
  ): Promise<FetchActionResponse<ProductPriceChartDataPoint[], C>>;
};
