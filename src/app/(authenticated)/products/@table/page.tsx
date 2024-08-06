import dynamic from "next/dynamic";
import { Suspense } from "react";

import { Loading } from "~/components/loading/Loading";

import { ProductsTableBody } from "./ProductsTableBody";

const ProductsTableView = dynamic(
  () => import("~/features/products/components/tables/ProductsTableView"),
  { loading: () => <Loading isLoading /> },
);

export default function ProductsTablePage() {
  return (
    <ProductsTableView>
      <Suspense fallback={<Loading isLoading />}>
        <ProductsTableBody />
      </Suspense>
    </ProductsTableView>
  );
}
