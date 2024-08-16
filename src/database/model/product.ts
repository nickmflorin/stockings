import { enumeratedLiterals } from "enumerated-literals";
import { uniq } from "lodash-es";

import type { ApiStatusChangeSubscription } from "./subscription";
import type { Product, PriceChangeSubscription } from "./zenstack-generated/models";

import { type TailwindTextColorClassName } from "~/components/types";

import { ProductStatus } from "./generated";

export type ApiProduct = Product & {
  readonly statusChangeSubscription: ApiStatusChangeSubscription | null;
  readonly priceChangeSubscription: PriceChangeSubscription | null;
};

export const ProductStatuses = enumeratedLiterals(
  [
    {
      value: ProductStatus.AvailableForBackorder,
      label: "Available for Backorder",
      textColorClassName: "text-yellow-700",
      description: "The product is not currently in stock, but is available for backorder.",
    },
    {
      value: ProductStatus.InStock,
      label: "In Stock",
      textColorClassName: "text-green-600",
      description: "The product is currently in stock.",
    },
    {
      value: ProductStatus.OutOfStock,
      label: "Out of Stock",
      textColorClassName: "text-amber-600",
      description: "The product is currently out of stock.",
    },
    {
      value: ProductStatus.NotListed,
      label: "Not Listed",
      textColorClassName: "text-gray-600",
      description: "The product is not longer listed on the website.",
    },
  ] as const satisfies {
    value: ProductStatus;
    description: string;
    label: string;
    textColorClassName: TailwindTextColorClassName;
  }[],
  {},
);

export const productStatusesAreAny = (status: ProductStatus[]): boolean =>
  Object.values(ProductStatus).length === uniq(status).length;
