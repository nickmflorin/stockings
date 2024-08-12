import { cache } from "react";

import { getAuthedUser } from "~/application/auth/server";
import { db } from "~/database";
import { type ProductPriceChartDataPoint } from "~/database/model";

export const fetchProductPriceData = cache(
  async (productId: string): Promise<ProductPriceChartDataPoint[]> => {
    await getAuthedUser({ strict: true });

    /* TODO: We may want to eventually include all records, so that we can show the full
     record history in the chart (even when the price failed to scrape). */
    const data = await db.productRecord.findMany({
      where: { productId, price: { not: null } },
      orderBy: [{ createdAt: "asc" }],
    });
    return data.map(record => ({ date: record.createdAt, price: record.price as number }));
  },
);
