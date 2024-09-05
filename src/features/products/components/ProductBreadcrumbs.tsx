import RouterLink from "next/link";

import { Link } from "~/components/buttons";
import { Title } from "~/components/typography";

export interface ProductBreadcrumbProps {
  readonly children: string;
  readonly returnHref: `/${string}`;
}

export const ProductBreadcrumb = ({ children, returnHref }: ProductBreadcrumbProps) => (
  <div className="flex flex-row items-center gap-2">
    <Link.Secondary
      className="text-title-sm"
      component={RouterLink}
      element="a"
      icon="arrow-left"
      href={returnHref}
    >
      Products
    </Link.Secondary>
    <Title component="h5" className="text-gray-600">
      /
    </Title>
    <Title component="h5">{children}</Title>
  </div>
);
