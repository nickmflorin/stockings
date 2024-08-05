import { db } from "~/database";

import { convertToPlainObject } from "~/api/serialization";

import { ClientProductsTableBody } from "./ClientProductsTableBody";

export const ProductsTableBody = async (): Promise<JSX.Element> => {
  const products = await db.product.findMany();
  return <ClientProductsTableBody data={products.map(convertToPlainObject)} />;
};
