"use client";
import dynamic from "next/dynamic";

import { type Product } from "~/database/model";

import { ProductCategoryBadge } from "~/components/badges/ProductCategoryBadge";
import { ProductSubCategoryBadge } from "~/components/badges/ProductSubCategoryBadge";
import { ProductLink } from "~/components/buttons/ProductLink";
import { convertConfigsToColumns } from "~/components/tables";
import { DataTableBody } from "~/components/tables/data-tables/DataTableBody";
import { Text } from "~/components/typography";
import { CurrencyText } from "~/components/typography/CurrencyText";
import { DateTimeText } from "~/components/typography/DateTimeText";

import { Columns } from "./columns";

const SubscribeCell = dynamic(() => import("./cells/SubscribeCell"));

export interface ClientProductsTableBodyProps {
  readonly data: Product[];
}

export const ClientProductsTableBody = ({ data }: ClientProductsTableBodyProps): JSX.Element => (
  <DataTableBody
    columns={convertConfigsToColumns(Columns, {
      name: {
        cellRenderer(datum) {
          return <ProductLink product={datum} />;
        },
      },
      status: {
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
      price: {
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
          return <SubscribeCell product={datum} />;
        },
      },
    })}
    data={data}
  />
);
