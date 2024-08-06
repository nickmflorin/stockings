import { enumeratedLiterals } from "enumerated-literals";

import { type TailwindTextColorClassName } from "~/components/types";

import { ProductStatus } from "./generated";

export const ProductStatuses = enumeratedLiterals(
  [
    {
      value: ProductStatus.AVAILABLE_FOR_BACKORDER,
      label: "Available for Backorder",
      textColorClassName: "text-yellow-700",
      description:
        "The product is listed on the website and not currently in stock, but is " +
        "available for backorder.",
    },
    {
      value: ProductStatus.IN_STOCK,
      label: "In Stock",
      textColorClassName: "text-green-600",
      description: "The product is listed on the website and is currently in stock.",
    },
    {
      value: ProductStatus.OUT_OF_STOCK,
      label: "Out of Stock",
      textColorClassName: "text-amber-600",
      description: "The product is listed on the website but is currently out of stock.",
    },
    {
      value: ProductStatus.NOT_LISTED,
      label: "Not Listed",
      textColorClassName: "text-gray-600",
      description:
        "The product was previously listed on the website, but is no longer included in " +
        "the products the website offers.",
    },
  ] as const satisfies {
    value: ProductStatus;
    description: string;
    label: string;
    textColorClassName: TailwindTextColorClassName;
  }[],
  {},
);
