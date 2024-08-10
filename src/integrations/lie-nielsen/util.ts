import { UnreachableCaseError } from "~/application/errors";
import { type Product, type ProductStatus } from "~/database/model";
import { logger } from "~/internal/logger";

import { humanizeList } from "~/lib/formatters";

const returnAndLogDates = <F extends readonly string[]>(
  fields: F,
  product: Product,
  rootField: "price" | "status",
): { [key in F[number]]: Date } => {
  const missingFields = humanizeList([...fields], { conjunction: "and", formatter: v => `'${v}'` });
  logger.warn(
    `Encountered a product with ID '${product.id}' (slug = '${product.slug}') that has ` +
      `a non-null '${rootField}', but has null value(s) for field(s) ${missingFields}. ` +
      "Setting the value of the field(s) to the current date.",
    { product },
  );
  return fields.reduce(
    (acc, field) => ({ ...acc, [field]: new Date() }),
    {} as { [key in F[number]]: Date },
  );
};

export const autoCorrectProductStatusDates = (
  product: Omit<Product, "status"> & { readonly status: ProductStatus },
  fields:
    | readonly ["statusAsOf", "statusLastUpdatedAt"]
    | readonly ["statusLastUpdatedAt", "statusAsOf"]
    | readonly ["statusAsOf"]
    | readonly ["statusLastUpdatedAt"],
): Partial<Pick<Product, "statusAsOf" | "statusLastUpdatedAt">> => {
  /* The logic inside of this method is present to ensure that the data flow is somewhat
     self-healing.  If the product has a defined status, it *should* have a value for the date/time
     in which this status was last updated (i.e. 'statusLastUpdatedAt') and the date/time in which
     the status was last recorded (i.e. 'statusAsOf').

     If it does not, it means that somehow, the data was corrupted - most likely due to data
     migrations, seeding, or other database operations that may have inadvertently set the status
     without setting the corresponding date/time fields.  In this case, we want to set the date/time
     fields to ensure data integrity, and will log a warning to ensure that we are aware that this
     had occurred. */
  if (product.statusLastUpdatedAt === null && product.statusAsOf !== null) {
    if ([...fields].includes("statusLastUpdatedAt")) {
      return returnAndLogDates(["statusLastUpdatedAt"], product, "status");
    }
    return {};
  } else if (product.statusLastUpdatedAt !== null && product.statusAsOf === null) {
    if ([...fields].includes("statusAsOf")) {
      return returnAndLogDates(["statusAsOf"], product, "status");
    }
    return {};
  } else if (product.statusLastUpdatedAt === null && product.statusAsOf === null) {
    if ([...fields].includes("statusLastUpdatedAt") && [...fields].includes("statusAsOf")) {
      return returnAndLogDates(["statusLastUpdatedAt", "statusAsOf"], product, "status");
    } else if ([...fields].includes("statusLastUpdatedAt")) {
      return returnAndLogDates(["statusLastUpdatedAt"], product, "status");
    } else if ([...fields].includes("statusAsOf")) {
      return returnAndLogDates(["statusAsOf"], product, "status");
    } else {
      throw new UnreachableCaseError("Detected unreachable code path!");
    }
  }
  return {};
};

export const autoCorrectProductPriceDates = (
  product: Omit<Product, "price"> & { readonly price: number },
  fields:
    | readonly ["priceAsOf", "priceLastUpdatedAt"]
    | readonly ["priceLastUpdatedAt", "priceAsOf"]
    | readonly ["priceAsOf"]
    | readonly ["priceLastUpdatedAt"],
): Partial<Pick<Product, "priceAsOf" | "priceLastUpdatedAt">> => {
  /* The logic inside of this method is present to ensure that the data flow is somewhat
     self-healing.  If the product has a defined price, it *should* have a value for the date/time
     in which this price was last updated (i.e. 'priceLastUpdatedAt') and the date/time in which
     the price was last recorded (i.e. 'priceAsOf').

     If it does not, it means that somehow, the data was corrupted - most likely due to data
     migrations, seeding, or other database operations that may have inadvertently set the price
     without setting the corresponding date/time fields.  In this case, we want to set the date/time
     fields to ensure data integrity, and will log a warning to ensure that we are aware that this
     had occurred. */
  if (product.priceLastUpdatedAt === null && product.priceAsOf !== null) {
    if ([...fields].includes("priceLastUpdatedAt")) {
      return returnAndLogDates(["priceLastUpdatedAt"], product, "price");
    }
    return {};
  } else if (product.priceLastUpdatedAt !== null && product.priceAsOf === null) {
    if ([...fields].includes("priceAsOf")) {
      return returnAndLogDates(["priceAsOf"], product, "price");
    }
    return {};
  } else if (product.priceLastUpdatedAt === null && product.priceAsOf === null) {
    if ([...fields].includes("priceLastUpdatedAt") && [...fields].includes("priceAsOf")) {
      return returnAndLogDates(["priceLastUpdatedAt", "priceAsOf"], product, "price");
    } else if ([...fields].includes("priceLastUpdatedAt")) {
      return returnAndLogDates(["priceLastUpdatedAt"], product, "price");
    } else if ([...fields].includes("priceAsOf")) {
      return returnAndLogDates(["priceAsOf"], product, "price");
    } else {
      throw new UnreachableCaseError("Detected unreachable code path!");
    }
  }
  return {};
};
