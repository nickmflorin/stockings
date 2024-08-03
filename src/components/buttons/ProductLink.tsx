import type { LinkProps } from "./generic";

import type { Product } from "~/database/model";

import { getProductDetailPageUrl } from "~/integrations/lie-nielsen/paths";

import { Link } from "./generic";

export interface ProductLinkProps extends Omit<LinkProps<"a">, "href"> {
  readonly product: Pick<Product, "slug" | "name">;
}

/* Note: The product's 'name' may be null if there was an error scraping the value.  We should
   account for this in a more graceful way in the future. */
export const ProductLink = ({ product, ...props }: ProductLinkProps): JSX.Element => (
  <Link {...props} href={getProductDetailPageUrl(product.slug)}>
    {product.name}
  </Link>
);
