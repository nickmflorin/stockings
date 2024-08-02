import { Suspense } from "react";

import { Loading } from "~/components/loading/Loading";

import { ProductsDataTableWrapper } from "./ProductsDataTableWrapper";
import { ProductsTableBody } from "./ProductsTableBody";

export const ProductsTable = async (): Promise<JSX.Element> => (
  <ProductsDataTableWrapper>
    <Suspense fallback={<Loading isLoading />}>
      <ProductsTableBody />
    </Suspense>
  </ProductsDataTableWrapper>
);
