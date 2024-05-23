import { P } from "pino";

import {
  enumeratedLiterals,
  type EnumeratedLiteralsModel,
  type EnumeratedLiteralsType,
} from "~/lib/literals";

// --------------------------------- URLS ---------------------------------
const LIE_NIELSEN_BASE_URL = "https://www.lie-nielsen.com" as const;

export type LieNielsenBaseUrl = typeof LIE_NIELSEN_BASE_URL;

export type LieNielsenUrl<P extends `/${string}`> = `${LieNielsenBaseUrl}${P}`;

export const toLieNielsenUrl = <P extends `/${string}`>(path: P): LieNielsenUrl<P> =>
  `${LIE_NIELSEN_BASE_URL}${path}` as LieNielsenUrl<P>;

// --------------------------------- Pages ---------------------------------
export const ProductsPages = enumeratedLiterals(
  [{ value: "hand-tools", accessor: "HandTools", node: "4066" }] as const,
  {},
);

export const ProductsSubPages = {
  [ProductsPages.HandTools]: enumeratedLiterals(
    [
      { value: "toms-toolbox", accessor: "TomsToolbox", node: "4225" },
      { value: "handplanes", accessor: "Handplanes", node: "4063" },
      { value: "saws", accessor: "Saws", node: "4067" },
      { value: "chisels", accessor: "Chisels", node: "4080" },
      { value: "spokeshaves", accessor: "Spokeshaves", node: "4091" },
      { value: "green-woodworking", accessor: "GreenWoodworking", node: "4170" },
      { value: "accessory-tools", accessor: "AccessoryTools", node: "4084" },
    ] as const,
    {},
  ),
} as const;

export type ProductsPageId = EnumeratedLiteralsType<typeof ProductsPages>;
export type ProductsPage = EnumeratedLiteralsModel<typeof ProductsPages>;
export type ProductsPageNode<P extends ProductsPageId> = Extract<
  ProductsPage,
  { value: P }
>["node"];

export type ProductsPagePath<P extends ProductsPageId = ProductsPageId> = P extends ProductsPageId
  ? `/nodes/${ProductsPageNode<P>}/${P}`
  : never;

export const getProductsPagePath = <P extends ProductsPageId>(id: P): ProductsPagePath<P> =>
  `/nodes/${ProductsPages.getModel(id).node}/${id}` as ProductsPagePath<P>;

export const getProductsPageUrl = <P extends ProductsPageId>(
  id: P,
): LieNielsenUrl<ProductsPagePath<P>> => toLieNielsenUrl(getProductsPagePath(id));

// --------------------------------- Sub Pages ---------------------------------
export type ProductsSubPageId<P extends ProductsPageId> = EnumeratedLiteralsType<
  (typeof ProductsSubPages)[P]
>;
export type ProductsSubPage<P extends ProductsPageId> = EnumeratedLiteralsModel<
  (typeof ProductsSubPages)[P]
>;
export type ProductsSubPageNode<P extends ProductsPageId, S extends ProductsSubPageId<P>> = Extract<
  ProductsSubPage<P>,
  { value: S }
>["node"];

export type ProductsSubPagePath<
  P extends ProductsPageId = ProductsPageId,
  S extends ProductsSubPageId<P> = ProductsSubPageId<P>,
> = P extends ProductsPageId
  ? S extends ProductsSubPageId<P>
    ? `/nodes/${ProductsSubPageNode<P, S>}/${S}`
    : never
  : never;

export const getProductsSubPagePath = <P extends ProductsPageId, S extends ProductsSubPageId<P>>(
  page: P,
  subPage: S,
): ProductsSubPagePath<P, S> =>
  `/nodes/${ProductsSubPages[page].getModel(subPage).node}/${subPage}` as ProductsSubPagePath<P, S>;

export const getProductsSubPageUrl = <P extends ProductsPageId, S extends ProductsSubPageId<P>>(
  page: P,
  subPage: S,
): LieNielsenUrl<ProductsSubPagePath<P, S>> =>
  toLieNielsenUrl(getProductsSubPagePath(page, subPage));

export type ProductsPageSubPagePair<
  P extends ProductsPageId = ProductsPageId,
  S extends ProductsSubPageId<P> = ProductsSubPageId<P>,
> = P extends ProductsPageId
  ? S extends ProductsSubPageId<P>
    ?
        | {
            readonly page: P;
            readonly subPage: S;
          }
        | {
            readonly page: P;
            readonly subPage?: never;
          }
    : never
  : never;

// --------------------------------- URLS ---------------------------------
type PaginatedPathParam<G extends number = number> = G extends number ? `page-${G}` : never;

export const paginatePathOrUrl = <P extends string, G extends number>(
  path: P,
  page: G,
): `${P}/${PaginatedPathParam<G>}` => `${path}/page-${page}` as `${P}/${PaginatedPathParam<G>}`;

export const LieNielsenUrls = {
  [ProductsPages.HandTools]: getProductsPageUrl(ProductsPages.HandTools),
} as const satisfies { [key in ProductsPageId]: LieNielsenUrl<ProductsPagePath<key>> };

/* export const getProductsPagePath = <S extends string>(param: S): `/products/${S}` =>
     `/products/${param}`; */
