"use client";
import dynamic from "next/dynamic";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

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

const SubscriptionCell = dynamic(() => import("./cells/SubscriptionCell"));
const ActionsCell = dynamic(() => import("./cells/ActionsCell"));

export interface ProductsTableBodyProps {
  readonly data: ApiProduct[];
}

export const ProductsTableBody = ({ data }: ProductsTableBodyProps): JSX.Element => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <DataTableBody
      onRowClick={productId => {
        const params = new URLSearchParams(searchParams);
        params.set("productId", productId);
        replace(`${pathname}?${params.toString()}`);
      }}
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
          subscription: {
            cellRenderer(datum) {
              return <SubscriptionCell product={datum} />;
            },
          },
          actions: {
            cellRenderer(datum) {
              return <ActionsCell product={datum} />;
            },
          },
        },
      )}
      data={data}
    />
  );
};

export default ProductsTableBody;
