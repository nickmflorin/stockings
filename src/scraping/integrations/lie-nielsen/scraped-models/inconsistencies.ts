import { logger } from "~/application/logger";
import {
  type ProductsPageId,
  type ProductsSubPageId,
} from "~/scraping/integrations/lie-nielsen/paths";

import { type ScrapedProduct, type ScrapedThumbnailProduct } from "./scraped-product";
import { type ScrapedThumbnail } from "./scraped-thumbnail";

type InconsistencyCheck<F extends keyof ScrapedProduct & keyof ScrapedThumbnail> = {
  readonly field: F;
};

const InconsistencyChecks: [InconsistencyCheck<"name">] = [{ field: "name" }];

export type AllowedScrapedProductInconsistency<
  F extends keyof ScrapedProduct & keyof ScrapedThumbnail,
> = {
  readonly field: F;
  readonly productValue: ScrapedProduct[F];
  readonly thumbnailValue: ScrapedThumbnail[F];
};

export const AllowedScrapedProductInconsistencies: [
  AllowedScrapedProductInconsistency<"name">,
  AllowedScrapedProductInconsistency<"name">,
] = [
  {
    field: "name",
    productValue: "No. 1 Bench Plane, Iron",
    thumbnailValue: "No.1 Bench Plane, Iron",
  },
  {
    field: "name",
    productValue: "Large Router Plane -  Open Throat",
    thumbnailValue: "Large Router Plane - Open Throat",
  },
];

const inconsistencyIsAllowed = <F extends keyof ScrapedProduct & keyof ScrapedThumbnail>(
  field: F,
  values: Pick<AllowedScrapedProductInconsistency<F>, "productValue" | "thumbnailValue">,
): boolean =>
  AllowedScrapedProductInconsistencies.filter(
    a =>
      a.field === field &&
      a.productValue === values.productValue &&
      a.thumbnailValue === values.thumbnailValue,
  ).length > 0;

export const checkScrapedProductInconsistencies = <
  P extends ProductsPageId = ProductsPageId,
  S extends ProductsSubPageId<P> = ProductsSubPageId<P>,
>(
  product: ScrapedThumbnailProduct<P, S>,
) => {
  for (const check of InconsistencyChecks) {
    const productValue = product[check.field];
    const thumbnailValue = product.thumbnail[check.field];
    if (productValue !== thumbnailValue) {
      if (inconsistencyIsAllowed(check.field, { productValue, thumbnailValue })) {
        continue;
      }
      logger.warn(
        `Inconsistent Scraped Product: The value for the attribute '${check.field}' on ` +
          `the scraped thumbnail is '${thumbnailValue}', but on the scraped product it ` +
          `is '${productValue}'.`,
        { thumbnailValue, productValue, field: check.field },
      );
    }
  }
};
