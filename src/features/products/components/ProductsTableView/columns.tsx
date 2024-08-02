import { type Product } from "~/prisma/model";

import { type DataTableColumn } from "~/components/tables";

export const Columns: DataTableColumn<Product>[] = [
  {
    id: "name",
    label: "Name",
    isOrderable: true,
    width: 120,
    // sortMethod: (order, a, b) => (a.name && b.name ? a.name > b.name : false),
    cellRenderer(datum) {
      return datum.name;
    },
  },
  {
    id: "slug",
    label: "Slug",
    isOrderable: true,
    width: 120,
    // sortMethod: (order, a, b) => (a.name && b.name ? a.name > b.name : false),
    cellRenderer(datum) {
      return datum.slug;
    },
  },
];
