import { type Product } from "~/database/model";

import { type DataTableColumnConfig } from "~/components/tables";

export const Columns: DataTableColumnConfig<Product>[] = [
  {
    id: "name",
    label: "Name",
    isOrderable: true,
  },
  {
    id: "status",
    label: "Status",
    isOrderable: true,
    minWidth: 280,
    maxWidth: 300,
  },
  {
    id: "price",
    label: "Price",
    isOrderable: true,
    minWidth: 280,
    maxWidth: 300,
  },
  {
    id: "category",
    label: "Category",
    isOrderable: true,
  },
  {
    id: "subcategories",
    label: "Sub Categories",
    isOrderable: true,
  },
];
