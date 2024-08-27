"use client";
import dynamic from "next/dynamic";

import { type ApiProduct } from "~/database/model";

import { ProductCategoryBadge } from "~/components/badges/ProductCategoryBadge";
import { ProductSubCategoryBadge } from "~/components/badges/ProductSubCategoryBadge";
import { ExternalProductIconLink } from "~/components/buttons/ExternalProductIconLink";
import { ProductLink } from "~/components/buttons/ProductLink";
import { useDrawers } from "~/components/drawers/hooks";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import { Text } from "~/components/typography";
import { CurrencyText } from "~/components/typography/CurrencyText";
import { DateTimeText } from "~/components/typography/DateTimeText";
import { ProductsTableColumns, type ProductsTableColumnId } from "~/features/products";
import { ProductStatusText } from "~/features/products/components/ProductStatusText";

const SubscriptionCell = dynamic(() => import("./cells/SubscriptionCell"));

export interface ProductsTableBodyProps {
  readonly data: ApiProduct[];
}

export const ProductsTableBody = ({ data }: ProductsTableBodyProps): JSX.Element => {
  const { ids, open } = useDrawers();

  return (
    <DataTableBody
      actionMenuWidth={200}
      getRowActions={(product, { setIsOpen }) => [
        {
          isVisible: product.statusChangeSubscription !== null,
          content: "Manage Status Subscription",
          onClick: e => {
            if (product.statusChangeSubscription !== null) {
              setIsOpen(false, e);
              open(ids.UPDATE_STATUS_CHANGE_SUBSCRIPTION, {
                product,
                subscriptionId: product.statusChangeSubscription.id,
              });
            }
          },
        },
        {
          isVisible: product.priceChangeSubscription !== null,
          content: "Manage Price Subscription",
          onClick: e => {
            if (product.priceChangeSubscription !== null) {
              setIsOpen(false, e);
              open(ids.UPDATE_PRICE_CHANGE_SUBSCRIPTION, {
                product,
                subscriptionId: product.priceChangeSubscription.id,
              });
            }
          },
        },
        {
          isVisible:
            product.statusChangeSubscription === null && product.priceChangeSubscription !== null,
          content: "Subscribe to Status Changes",
          onClick: e => {
            setIsOpen(false, e);
            open(ids.SUBSCRIBE_TO_STATUS_CHANGES, {
              product,
            });
          },
        },
        {
          isVisible:
            product.priceChangeSubscription === null && product.statusChangeSubscription !== null,
          content: "Subscribe to Price Changes",
          onClick: e => {
            setIsOpen(false, e);
            open(ids.SUBSCRIBE_TO_PRICE_CHANGES, {
              product,
            });
          },
        },
        {
          isVisible:
            product.priceChangeSubscription === null && product.statusChangeSubscription === null,
          content: "Subscribe",
          onClick: e => {
            setIsOpen(false, e);
            open(ids.SUBSCRIBE_TO_PRODUCT_MULTIPART, {
              product,
            });
          },
        },
      ]}
      columns={convertConfigsToColumns(
        [...ProductsTableColumns] as DataTableColumnConfig<ApiProduct, ProductsTableColumnId>[],
        {
          name: {
            cellRenderer(datum) {
              return (
                <div className="flex flex-row items-center gap-2">
                  <ProductLink product={datum} location="internal" />
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
        },
      )}
      data={data}
    />
  );
};

export default ProductsTableBody;
