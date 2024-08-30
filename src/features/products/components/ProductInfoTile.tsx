import { type ReactNode } from "react";

import type { Product, ProductSubCategory } from "~/database/model";

import { Avatar } from "~/components/images/Avatar";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";
import { Description, Label, Text } from "~/components/typography";
import { CurrencyText } from "~/components/typography/CurrencyText";
import { DateTimeText } from "~/components/typography/DateTimeText";
import { HumanizedList } from "~/components/typography/HumanizedList";
import { ProductCategoryText } from "~/features/products/components/ProductCategoryText";
import { ProductStatusText } from "~/features/products/components/ProductStatusText";
import { ProductSubCategoryText } from "~/features/products/components/ProductSubCategoryText";


const InfoItem = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex flex-row gap-2 justify-between">
    <Label className="w-[30%] min-w-[120px] max-w-[30%]">{label}</Label>
    <div className="w-[60%] min-w-[200px] max-w-[60%]">{children}</div>
  </div>
);

export interface ProductInfoTileProps extends ComponentProps {
  readonly product: Pick<
    Product,
    | "name"
    | "price"
    | "status"
    | "statusAsOf"
    | "priceAsOf"
    | "imageSrc"
    | "category"
    | "subCategories"
    | "descriptions"
  >;
}

export const ProductInfoTile = ({ product, ...props }: ProductInfoTileProps): JSX.Element => (
  <div {...props} className={classNames("flex flex-col gap-4 w-full", props.className)}>
    <div className="flex flex-row gap-4 w-full">
      <Avatar size={132} src={product?.imageSrc} className="border" radius="sm" />
      <div className="flex flex-col gap-2 pt-1">
        <InfoItem label="Status">
          {product.status && (
            <div className="flex flex-col">
              <ProductStatusText fontWeight="medium" fontSize="sm" status={product.status} />
              {product.priceAsOf && (
                <Text fontWeight="regular" fontSize="sm" className="text-gray-500">
                  {" "}
                  as of <DateTimeText component="span" value={product.priceAsOf} />
                </Text>
              )}
            </div>
          )}
        </InfoItem>
        <InfoItem label="Price">
          {product.price && (
            <div className="flex flex-col">
              <CurrencyText fontWeight="medium" fontSize="sm">
                {product.price}
              </CurrencyText>
              {product.priceAsOf && (
                <Text fontWeight="regular" fontSize="sm" className="text-gray-500">
                  {" "}
                  as of <DateTimeText component="span" value={product.priceAsOf} />
                </Text>
              )}
            </div>
          )}
        </InfoItem>
        <InfoItem label="Category">
          <ProductCategoryText category={product.category} colored />
        </InfoItem>
        <InfoItem label="Subcategories">
          <HumanizedList
            values={product.subCategories}
            valueRenderer={(v: ProductSubCategory) => (
              <ProductSubCategoryText colored component="span" subCategory={v} />
            )}
          />
        </InfoItem>
      </div>
    </div>
    {product.descriptions.length !== 0 && (
      <div className="flex flex-col gap-1">
        {product.descriptions.map((description, index) => (
          <Description key={index}>{description}</Description>
        ))}
      </div>
    )}
  </div>
);
