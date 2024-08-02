import { prisma } from "~/prisma/client";

import { ClientProductsTableBody } from "./ClientProductsTableBody";

export const ProductsTableBody = async (): Promise<JSX.Element> => {
  const products = await prisma.product.findMany();
  return <ClientProductsTableBody data={products} />;
};
