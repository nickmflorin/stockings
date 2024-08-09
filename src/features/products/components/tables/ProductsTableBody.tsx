"use client";
import dynamic from "next/dynamic";

import { type ApiProduct } from "~/database/model";

import { ProductCategoryBadge } from "~/components/badges/ProductCategoryBadge";
import { ProductSubCategoryBadge } from "~/components/badges/ProductSubCategoryBadge";
import { ProductLink } from "~/components/buttons/ProductLink";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import { Text } from "~/components/typography";
import { CurrencyText } from "~/components/typography/CurrencyText";
import { DateTimeText } from "~/components/typography/DateTimeText";
import { ProductsTableColumns, type ProductsTableColumnId } from "~/features/products";
import { ProductStatusText } from "~/features/products/components/ProductStatusText";

const SubscribeCell = dynamic(() => import("./cells/SubscribeCell"));
const UpdateSubscriptionCell = dynamic(() => import("./cells/UpdateSubscriptionCell"));

export interface ProductsTableBodyProps {
  readonly data: ApiProduct[];
}

export const ProductsTableBody = ({ data }: ProductsTableBodyProps): JSX.Element => (
  <DataTableBody
    columns={convertConfigsToColumns(
      [...ProductsTableColumns] as DataTableColumnConfig<ApiProduct, ProductsTableColumnId>[],
      {
        name: {
          cellRenderer(datum) {
            return <ProductLink product={datum} />;
          },
        },
        status: {
          cellRenderer(datum) {
            if (datum.status) {
              return (
                <div className="flex flex-col">
                  <ProductStatusText fontWeight="medium" fontSize="sm" status={datum.status} />
                  {datum.statusRecordedAt && (
                    <Text fontWeight="regular" fontSize="sm" className="text-gray-500">
                      {" "}
                      as of <DateTimeText component="span" value={datum.statusRecordedAt} />
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
                  {datum.priceRecordedAt && (
                    <Text fontWeight="regular" fontSize="sm" className="text-gray-500">
                      {" "}
                      as of <DateTimeText component="span" value={datum.priceRecordedAt} />
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
        subcategories: {
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
        subscribe: {
          cellRenderer(datum) {
            if (datum.subscription) {
              return <UpdateSubscriptionCell product={datum} subscription={datum.subscription} />;
            }
            return <SubscribeCell product={datum} />;
          },
        },
      },
    )}
    data={data}
  />
);

export default ProductsTableBody;
