import { logger } from "~/internal/logger";

import { dataValueIsFieldValue } from "~/integrations/scraping";

import { type IScrapedProductData, type ProcessedScrapedProduct } from "./scraped-product";
import { type IScrapedThumbnailData } from "./scraped-thumbnail";

type InconsistencyCheck<F extends keyof IScrapedProductData & keyof IScrapedThumbnailData> = {
  readonly field: F;
};

const InconsistencyChecks: [InconsistencyCheck<"name">] = [{ field: "name" }];

export type AllowedScrapedProductInconsistency<
  F extends keyof IScrapedProductData & keyof IScrapedThumbnailData,
> = {
  readonly field: F;
  readonly productValue: IScrapedProductData[F];
  readonly thumbnailValue: IScrapedThumbnailData[F];
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

const inconsistencyIsAllowed = <F extends keyof IScrapedProductData & keyof IScrapedThumbnailData>(
  field: F,
  values: Pick<AllowedScrapedProductInconsistency<F>, "productValue" | "thumbnailValue">,
): boolean =>
  AllowedScrapedProductInconsistencies.filter(
    a =>
      a.field === field &&
      a.productValue === values.productValue &&
      a.thumbnailValue === values.thumbnailValue,
  ).length > 0;

export const checkScrapedProductInconsistencies = (product: ProcessedScrapedProduct) => {
  for (const check of InconsistencyChecks) {
    const rawProductValue = product.data[check.field];
    /* The value on the scraped product may be an error object { error: ... } if there was an
       error scraping the field.  In this case, inconsistencies should not be checked. */
    const productValue = dataValueIsFieldValue(rawProductValue) ? rawProductValue.value : null;
    /* Accessing the validated data on the thumbnail should be safe because the thumbnail's
       validity should have been checked before being used to instantiate a ScrapedProduct.  If
       the thumbnail is invalid, an error will be thrown here. */
    const thumbnailValue = product.thumbnail.validatedData[check.field];

    if (productValue !== null && productValue !== thumbnailValue) {
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
