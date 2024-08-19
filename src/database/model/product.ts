import { enumeratedLiterals } from "enumerated-literals";
import { uniq } from "lodash-es";
import resolveConfig from "tailwindcss/resolveConfig";

import type { ApiStatusChangeSubscription } from "./subscription";
import type { Product, PriceChangeSubscription } from "./zenstack-generated/models";

import {
  type TailwindTextColorClassName,
  type TailwindBgColorClassName,
  type HexColor,
} from "~/components/types";

import TailwindConfig from "../../tailwind.config";

import { ProductStatus } from "./generated";

export type ApiProduct = Product & {
  readonly statusChangeSubscription: ApiStatusChangeSubscription | null;
  readonly priceChangeSubscription: PriceChangeSubscription | null;
};

const Theme = resolveConfig(TailwindConfig);

export const ProductStatuses = enumeratedLiterals(
  [
    {
      value: ProductStatus.AvailableForBackorder,
      label: "Available for Backorder",
      textColorClassName: "text-yellow-700",
      description: "The product is not currently in stock, but is available for backorder.",
      badgeTextColorClassName: "text-yellow-700",
      badgeBgColorClassName: "bg-yellow-200",
      shortLabel: "Backorder",
      backgroundColor: Theme.theme.colors.yellow["200"],
      textColor: Theme.theme.colors.yellow["700"],
    },
    {
      value: ProductStatus.InStock,
      label: "In Stock",
      textColorClassName: "text-green-600",
      description: "The product is currently in stock.",
      badgeBgColorClassName: "bg-green-200",
      badgeTextColorClassName: "text-green-600",
      shortLabel: "In Stock",
      backgroundColor: Theme.theme.colors.green["200"],
      textColor: Theme.theme.colors.green["600"],
    },
    {
      value: ProductStatus.OutOfStock,
      label: "Out of Stock",
      textColorClassName: "text-amber-600",
      description: "The product is currently out of stock.",
      badgeBgColorClassName: "bg-amber-200",
      badgeTextColorClassName: "text-amber-600",
      shortLabel: "Out of Stock",
      backgroundColor: Theme.theme.colors.amber["200"],
      textColor: Theme.theme.colors.amber["600"],
    },
    {
      value: ProductStatus.NotListed,
      label: "Not Listed",
      shortLabel: "Not Listed",
      textColorClassName: "text-gray-600",
      description: "The product is not longer listed on the website.",
      badgeBgColorClassName: "bg-gray-200",
      badgeTextColorClassName: "text-gray-600",
      backgroundColor: Theme.theme.colors.gray["200"],
      textColor: Theme.theme.colors.gray["600"],
    },
  ] as const satisfies {
    value: ProductStatus;
    shortLabel: string;
    description: string;
    label: string;
    textColorClassName: TailwindTextColorClassName;
    backgroundColor: HexColor;
    textColor: HexColor;
    badgeBgColorClassName: TailwindBgColorClassName;
    badgeTextColorClassName: TailwindTextColorClassName;
  }[],
  {},
);

export const productStatusesAreAny = (status: ProductStatus[]): boolean =>
  Object.values(ProductStatus).length === uniq(status).length;
