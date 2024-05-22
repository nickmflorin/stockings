import {
  enumeratedLiterals,
  type EnumeratedLiteralsModel,
  type EnumeratedLiteralsType,
} from "~/lib/literals";

const LIE_NIELSEN_BASE_URL = "https://www.lie-nielsen.com" as const;

export type LieNielsenBaseUrl = typeof LIE_NIELSEN_BASE_URL;

export const ProductPages = enumeratedLiterals(
  [{ value: "hand-tools", accessor: "HandTools", node: "4066" }] as const,
  {},
);

export type ProductPageId = EnumeratedLiteralsType<typeof ProductPages>;
export type ProductPage = EnumeratedLiteralsModel<typeof ProductPages>;
export type ProductPageNode<P extends ProductPageId> = Extract<ProductPage, { value: P }>["node"];

export type ProductPagePath<P extends ProductPageId = ProductPageId> = P extends ProductPageId
  ? `/nodes/${ProductPageNode<P>}/${P}`
  : never;

export type LieNielsenUrl<P extends `/${string}`> = `${LieNielsenBaseUrl}${P}`;

export const getProductPagePath = <P extends ProductPageId>(id: P): ProductPagePath<P> =>
  `/nodes/${ProductPages.getModel(id).node}/${id}` as ProductPagePath<P>;

export const getProductPageUrl = <P extends ProductPageId>(
  id: P,
): LieNielsenUrl<ProductPagePath<P>> => `${LIE_NIELSEN_BASE_URL}${getProductPagePath(id)}`;

export const LieNielsenUrls = {
  [ProductPages.HandTools]: getProductPageUrl(ProductPages.HandTools),
} satisfies { [key in ProductPageId]: LieNielsenUrl<ProductPagePath<key>> };
