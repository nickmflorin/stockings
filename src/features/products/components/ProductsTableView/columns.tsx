import { type Product } from "~/database/model";

import { ProductCategoryBadge } from "~/components/badges/ProductCategoryBadge";
import { ProductSubCategoryBadge } from "~/components/badges/ProductSubCategoryBadge";
import { ProductLink } from "~/components/buttons/ProductLink";
import { type DataTableColumn } from "~/components/tables";
import { Text } from "~/components/typography";
import { CurrencyText } from "~/components/typography/CurrencyText";
import { DateTimeText } from "~/components/typography/DateTimeText";

export const Columns: DataTableColumn<Product>[] = [
  {
    id: "name",
    label: "Name",
    isOrderable: true,
    cellRenderer(datum) {
      return <ProductLink product={datum} />;
    },
  },
  {
    id: "status",
    label: "Status",
    isOrderable: true,
    minWidth: 280,
    maxWidth: 300,
    cellRenderer(datum) {
      if (datum.status) {
        return (
          <Text className="text-sm font-medium">
            {datum.status}
            {datum.statusRecordedAt && (
              <Text component="span" className="text-gray-500 font-regular">
                {" "}
                as of <DateTimeText component="span" value={datum.statusRecordedAt} />
              </Text>
            )}
          </Text>
        );
      }
      return <></>;
    },
  },
  {
    id: "price",
    label: "Price",
    isOrderable: true,
    minWidth: 280,
    maxWidth: 300,
    cellRenderer(datum) {
      if (datum.price) {
        return (
          <Text className="text-sm font-medium">
            <CurrencyText component="span">{datum.price}</CurrencyText>
            {datum.priceRecordedAt && (
              <Text component="span" className="text-gray-500 font-regular">
                {" "}
                as of <DateTimeText component="span" value={datum.priceRecordedAt} />
              </Text>
            )}
          </Text>
        );
      }
      return <></>;
    },
  },
  {
    id: "category",
    label: "Category",
    isOrderable: true,
    cellRenderer(datum) {
      return <ProductCategoryBadge category={datum.category} />;
    },
  },
  {
    id: "subcategories",
    label: "Sub Categories",
    isOrderable: true,
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
