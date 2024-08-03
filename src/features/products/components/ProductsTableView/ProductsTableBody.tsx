import { db } from "~/database";

import { ClientProductsTableBody } from "./ClientProductsTableBody";

export const ProductsTableBody = async (): Promise<JSX.Element> => {
  const products = await db.product.findMany();
  return <ClientProductsTableBody data={products} />;
};
