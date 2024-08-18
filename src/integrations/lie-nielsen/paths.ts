import {
  enumeratedLiterals,
  type EnumeratedLiteralsModel,
  type EnumeratedLiteralsMember,
} from "enumerated-literals";

import { ProductCategory, ProductSubCategory } from "~/database/model";

// --------------------------------- URLS ---------------------------------
const LIE_NIELSEN_BASE_URL = "https://www.lie-nielsen.com" as const;

export type LieNielsenBaseUrl = typeof LIE_NIELSEN_BASE_URL;

export type LieNielsenUrl<P extends `/${string}`> = `${LieNielsenBaseUrl}${P}`;

export const toLieNielsenUrl = <P extends `/${string}`>(path: P): LieNielsenUrl<P> =>
  `${LIE_NIELSEN_BASE_URL}${path}` as LieNielsenUrl<P>;

// --------------------------------- Pages ---------------------------------
export const ProductsPages = enumeratedLiterals(
  [
    {
      value: "hand-tools",
      accessor: "HandTools",
      category: ProductCategory.HandTools,
      node: "4066",
    },
  ] as const satisfies {
    value: string;
    accessor: string;
    category: ProductCategory;
    node: `${number}`;
  }[],
  {},
);

export type ProductsPageId = EnumeratedLiteralsMember<typeof ProductsPages>;

export type ProductsPage<P extends ProductsPageId = ProductsPageId> = Extract<
  EnumeratedLiteralsModel<typeof ProductsPages>,
  { value: P }
>;

export type ProductsPagePath<P extends ProductsPageId = ProductsPageId> = P extends ProductsPageId
  ? `/nodes/${ProductsPage<P>["node"]}/${P}`
  : never;

export const getProductsPagePath = <P extends ProductsPageId>(id: P): ProductsPagePath<P> =>
  `/nodes/${ProductsPages.getModel(id).node}/${id}` as ProductsPagePath<P>;

export const getProductsPageUrl = <P extends ProductsPageId>(
  id: P,
): LieNielsenUrl<ProductsPagePath<P>> => toLieNielsenUrl(getProductsPagePath(id));

// --------------------------------- Sub Pages ---------------------------------
export const ProductsSubPages = enumeratedLiterals(
  [
    {
      value: "toms-toolbox",
      accessor: "TomsToolbox",
      node: "4225",
      subCategory: null,
      parent: ProductsPages.HandTools,
    },
    {
      value: "handplanes",
      accessor: "Handplanes",
      node: "4063",
      subCategory: ProductSubCategory.HandPlanes,
      parent: ProductsPages.HandTools,
    },
    {
      value: "saws",
      accessor: "Saws",
      node: "4067",
      subCategory: ProductSubCategory.Saws,
      parent: ProductsPages.HandTools,
    },
    {
      value: "chisels",
      accessor: "Chisels",
      node: "4080",
      subCategory: ProductSubCategory.Chisels,
      parent: ProductsPages.HandTools,
    },
    {
      value: "spokeshaves",
      accessor: "Spokeshaves",
      node: "4091",
      subCategory: ProductSubCategory.Spokeshaves,
      parent: ProductsPages.HandTools,
    },
    {
      value: "green-woodworking",
      accessor: "GreenWoodworking",
      node: "4170",
      subCategory: ProductSubCategory.GreenWoodworking,
      parent: ProductsPages.HandTools,
    },
    {
      value: "accessory-tools",
      accessor: "AccessoryTools",
      node: "4084",
      subCategory: ProductSubCategory.AccessoryTools,
      parent: ProductsPages.HandTools,
    },
  ] as const satisfies {
    parent: ProductsPageId;
    value: string;
    accessor: string;
    node: `${number}`;
    subCategory: ProductSubCategory | null;
  }[],
  {},
);

export type ProductsSubPageId = EnumeratedLiteralsMember<typeof ProductsSubPages>;

export type ProductsSubPage<S extends ProductsSubPageId = ProductsSubPageId> = Extract<
  EnumeratedLiteralsModel<typeof ProductsSubPages>,
  { value: S }
>;

export type ProductsSubPageNode<S extends ProductsSubPageId = ProductsSubPageId> =
  ProductsSubPage<S>["node"];

export type ProductsSubPagePath<S extends ProductsSubPageId = ProductsSubPageId> =
  `/nodes/${ProductsSubPageNode<S>}/${S}`;

export const getProductsSubPagePath = <S extends ProductsSubPageId>(
  subPage: S,
): ProductsSubPagePath<S> =>
  `/nodes/${ProductsSubPages.getModel(subPage).node}/${subPage}` as ProductsSubPagePath<S>;

export const getProductsSubPageUrl = <S extends ProductsSubPageId>(
  subPage: S,
): LieNielsenUrl<ProductsSubPagePath<S>> => toLieNielsenUrl(getProductsSubPagePath(subPage));

// --------------------------------- Sub Pages ---------------------------------
export type ProductDetailPagePath<S extends string> = `/products/${S}`;

export const getProductDetailPagePath = <S extends string>(slug: S): ProductDetailPagePath<S> =>
  `/products/${slug}`;

export const getProductDetailPageUrl = <S extends string>(
  slug: S,
): LieNielsenUrl<ProductDetailPagePath<S>> => toLieNielsenUrl(`/products/${slug}`);

// --------------------------------- URLS ---------------------------------
type PaginatedPathParam<G extends number = number> = G extends number ? `page-${G}` : never;

export const paginatePathOrUrl = <P extends string, G extends number>(
  path: P,
  page: G,
): `${P}/${PaginatedPathParam<G>}` => `${path}/page-${page}` as `${P}/${PaginatedPathParam<G>}`;
