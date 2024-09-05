import { type ApiProduct } from "~/database/model";

import { ExternalProductIconLink } from "~/components/buttons/ExternalProductIconLink";
import { ProductLink } from "~/components/buttons/ProductLink";
import { type DataTableColumnProperties } from "~/components/tables";
import { Text } from "~/components/typography";
import { CurrencyText } from "~/components/typography/CurrencyText";
import { DateTimeText } from "~/components/typography/DateTimeText";
import { type ProductsAdminTableColumnId } from "~/features/products";
import {
  ProductCategoryBadge,
  ProductSubCategoryBadge,
} from "~/features/products/components/badges";
import { ProductStatusText } from "~/features/products/components/ProductStatusText";

export const ProductsTableColumnProperties = (
  location: "admin" | "public",
): DataTableColumnProperties<
  ApiProduct | ApiProduct<["priceChangeSubscription", "statusChangeSubscription"]>,
  ProductsAdminTableColumnId
> => ({
  name: {
    cellRenderer(datum) {
      return (
        <div className="flex flex-row items-center gap-2">
          <ProductLink product={datum} location={location} />
          <ExternalProductIconLink product={datum} />
        </div>
      );
    },
  },
  status: {
    cellRenderer(datum) {
      if (datum.status) {
        return (
          <div className="flex flex-col">
            <ProductStatusText fontWeight="medium" fontSize="sm" status={datum.status} />
            {datum.statusAsOf && (
              <Text fontWeight="regular" fontSize="sm" className="text-gray-500">
                {" "}
                as of <DateTimeText component="span" value={datum.statusAsOf} />
              </Text>
            )}
          </div>
        );
      }
      return <></>;
    },
  },
  price: {
    cellRenderer(datum) {
      if (datum.price) {
        return (
          <div className="flex flex-col">
            <CurrencyText fontWeight="medium" fontSize="sm">
              {datum.price}
            </CurrencyText>
            {datum.priceAsOf && (
              <Text fontWeight="regular" fontSize="sm" className="text-gray-500">
                {" "}
                as of <DateTimeText component="span" value={datum.priceAsOf} />
              </Text>
            )}
          </div>
        );
      }
      return <></>;
    },
  },
  category: {
    cellRenderer(datum) {
      return <ProductCategoryBadge category={datum.category} />;
    },
  },
  subCategories: {
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
});
