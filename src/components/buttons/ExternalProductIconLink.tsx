import type { IconButtonProps } from "./generic";

import type { Product } from "~/database/model";

import { getProductDetailPageUrl } from "~/integrations/lie-nielsen/paths";

import { Tooltip } from "~/components/floating/Tooltip";

import { IconButton } from "./generic";

export interface ExternalProductIconLinkProps
  extends Omit<IconButtonProps<"a">, "href" | "element" | "component"> {
  readonly product: Pick<Product, "slug">;
}

export const ExternalProductIconLink = ({
  product,
  ...props
}: ExternalProductIconLinkProps): JSX.Element => (
  <Tooltip content="View on Lie-Nielsen.com" className="text-sm" placement="top-start">
    <IconButton.Transparent
      size="xsmall"
      scheme="light"
      {...props}
      href={getProductDetailPageUrl(product.slug)}
      tight
      element="a"
      target="_blank"
      rel="noopener noreferrer"
      icon={{ name: "arrow-up-right-from-square", iconStyle: "solid" }}
    />
  </Tooltip>
);
