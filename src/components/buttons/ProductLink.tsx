import NextLink from "next/link";

import type { LinkProps } from "./generic";

import type { Product } from "~/database/model";

import { getProductDetailPageUrl } from "~/integrations/lie-nielsen/paths";

import { Link } from "./generic";

export interface ProductLinkProps extends Omit<LinkProps<"a">, "href" | "element"> {
  readonly product: Pick<Product, "slug" | "name">;
  readonly location?: "external" | "internal";
}

/* Note: The product's 'name' may be null if there was an error scraping the value.  We should
   account for this in a more graceful way in the future. */
export const ProductLink = ({
  product,
  location = "internal",
  ...props
}: ProductLinkProps): JSX.Element =>
  location === "external" ? (
    <Link
      {...props}
      href={getProductDetailPageUrl(product.slug)}
      element="a"
      target="_blank"
      rel="noopener noreferrer"
    >
      {product.name}
    </Link>
  ) : (
    <Link {...props} href={`/product/${product.id}`} element="a" component={NextLink}>
      {product.name}
    </Link>
  );
