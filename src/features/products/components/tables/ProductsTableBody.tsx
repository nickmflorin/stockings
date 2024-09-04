"use client";
import dynamic from "next/dynamic";

import { type ApiProduct } from "~/database/model";

import { useDrawers } from "~/components/drawers/hooks";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import { ProductsTableColumns, type ProductsTableColumnId } from "~/features/products";

import { ProductsTableColumnProperties } from "./ProductsTableColumnProperties";

const SubscriptionCell = dynamic(() => import("./cells/SubscriptionCell"));

export interface ProductsTableBodyProps {
  readonly excludeColumns?: ProductsTableColumnId[];
  readonly data: ApiProduct<["statusChangeSubscription", "priceChangeSubscription"]>[];
}

export const ProductsTableBody = (props: ProductsTableBodyProps): JSX.Element => {
  const { ids, open } = useDrawers();

  return (
    <DataTableBody
      {...props}
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
        [...ProductsTableColumns] as DataTableColumnConfig<
          ApiProduct<["statusChangeSubscription", "priceChangeSubscription"]>,
          ProductsTableColumnId
        >[],
        {
          ...ProductsTableColumnProperties,
          subscription: {
            cellRenderer(datum) {
              return <SubscriptionCell product={datum} />;
            },
          },
        },
      )}
    />
  );
};

export default ProductsTableBody;
