"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import { type ApiProduct } from "~/database/model";

import { useDrawers } from "~/components/drawers/hooks";
import { convertConfigsToColumns, type DataTableColumnConfig } from "~/components/tables";
import {
  DataTableBody,
  type DataTableBodyProps,
} from "~/components/tables/data-tables/DataTableBody";
import { ProductsTableColumns, type ProductsTableColumnId } from "~/features/products";

import { useProductsTableColumnProperties } from "./hooks/use-column-properties";

const SubscriptionCell = dynamic(() => import("./cells/SubscriptionCell"));

export interface ProductsTableBodyProps
  extends Omit<
    DataTableBodyProps<
      ApiProduct<["statusChangeSubscription", "priceChangeSubscription"]>,
      ProductsTableColumnId
    >,
    "columns" | "getRowActions" | "actionMenuWidth" | "onRowClick"
  > {}

export const ProductsTableBody = (props: ProductsTableBodyProps): JSX.Element => {
  const { ids, open } = useDrawers();
  const columnProperties = useProductsTableColumnProperties();
  const { push } = useRouter();

  return (
    <DataTableBody
      {...props}
      onRowClick={id => push(`/product/${id}`)}
      columns={convertConfigsToColumns(
        [...ProductsTableColumns.columns] as DataTableColumnConfig<
          ApiProduct<["statusChangeSubscription", "priceChangeSubscription"]>,
          ProductsTableColumnId
        >[],
        {
          ...columnProperties,
          subscription: {
            cellRenderer(datum) {
              return <SubscriptionCell product={datum} />;
            },
          },
        },
      )}
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
    />
  );
};

export default ProductsTableBody;
