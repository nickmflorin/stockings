"use client";
import { ProductCategory } from "~/database/model";

import { ProductInfoTile } from "~/features/products/components/ProductInfoTile";

export default function Error() {
  return (
    <ProductInfoTile
      product={{
        subCategories: [],
        name: "",
        descriptions: [""],
        price: 0,
        status: null,
        category: ProductCategory.HandTools,
        statusAsOf: null,
        priceAsOf: null,
        imageSrc: null,
      }}
    />
  );
}
