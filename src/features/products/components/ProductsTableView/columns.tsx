import { type Product } from "~/database/model";

import { ProductCategoryBadge } from "~/components/badges/ProductCategoryBadge";
import { ProductSubCategoryBadge } from "~/components/badges/ProductSubCategoryBadge";
import { ProductLink } from "~/components/buttons/ProductLink";
import { type DataTableColumn } from "~/components/tables";

export const Columns: DataTableColumn<Product>[] = [
  {
    id: "name",
    label: "Name",
    isOrderable: true,
    width: 120,
    cellRenderer(datum) {
      return <ProductLink product={datum} />;
    },
  },
  {
    id: "category",
    label: "Category",
    isOrderable: true,
    width: 120,
    cellRenderer(datum) {
      return <ProductCategoryBadge category={datum.category} />;
    },
  },
  {
    id: "subcategories",
    label: "Sub Categories",
    isOrderable: true,
    width: 120,
    cellRenderer(datum) {
      return (
        <div className="flex flex-row items-center">
          {datum.subCategories.map(subCategory => (
            <ProductSubCategoryBadge key={subCategory} category={subCategory} />
          ))}
        </div>
      );
    },
  },
];
