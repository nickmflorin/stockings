import { enumeratedLiterals } from "enumerated-literals";

import { type TailwindBgColorClassName, type TailwindTextColorClassName } from "~/components/types";

import { ProductCategory, ProductSubCategory } from "./generated";

export const ProductCategories = enumeratedLiterals(
  [
    {
      value: ProductCategory.HandTools,
      label: "Hand Tools",
      badgeBgColorClassName: "bg-gray-300",
      badgeTextColorClassName: "text-body",
    },
  ] as const satisfies {
    value: ProductCategory;
    label: string;
    badgeBgColorClassName: TailwindBgColorClassName;
    badgeTextColorClassName: TailwindTextColorClassName;
  }[],
  {},
);

export const ProductSubCategories = enumeratedLiterals(
  [
    {
      value: ProductSubCategory.AccessoryTools,
      label: "Accessory Tools",
      badgeBgColorClassName: "bg-yellow-300",
      badgeTextColorClassName: "text-yellow-800",
    },
    {
      value: ProductSubCategory.Chisels,
      label: "Chisels",
      badgeBgColorClassName: "bg-orange-300",
      badgeTextColorClassName: "text-orange-800",
    },
    {
      value: ProductSubCategory.GreenWoodworking,
      label: "Green Woodworking",
      badgeBgColorClassName: "bg-green-300",
      badgeTextColorClassName: "text-green-800",
    },
    {
      value: ProductSubCategory.HandPlanes,
      label: "Hand Planes",
      badgeBgColorClassName: "bg-cyan-300",
      badgeTextColorClassName: "text-cyan-800",
    },
    {
      value: ProductSubCategory.Saws,
      label: "Saws",
      badgeBgColorClassName: "bg-blue-300",
      badgeTextColorClassName: "text-blue-800",
    },
    {
      value: ProductSubCategory.Spokeshaves,
      label: "Spokeshaves",
      badgeBgColorClassName: "bg-purple-300",
      badgeTextColorClassName: "text-purple-800",
    },
  ] as const satisfies {
    value: ProductSubCategory;
    label: string;
    badgeBgColorClassName: TailwindBgColorClassName;
    badgeTextColorClassName: TailwindTextColorClassName;
  }[],
  {},
);
