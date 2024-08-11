import { forwardRef, type ForwardedRef } from "react";

import { ProductSubCategories, type ProductSubCategory } from "~/database/model";

import type { SelectBehaviorType, SelectInstance } from "~/components/input/select";
import { DataSelect, type DataSelectProps } from "~/components/input/select/DataSelect";
import { ProductSubCategoryText } from "~/features/products/components/ProductSubCategoryText";

type M = { readonly value: ProductSubCategory };

const getItemValue = (m: M) => ProductSubCategories.getModel(m.value).value;

export interface ProductSubCategorySelectProps<B extends SelectBehaviorType>
  extends Omit<
    DataSelectProps<M, { behavior: B; getItemValue: typeof getItemValue }>,
    "options" | "data" | "itemIsDisabled"
  > {
  readonly behavior: B;
}

export const ProductSubCategorySelect = forwardRef<
  SelectInstance,
  ProductSubCategorySelectProps<SelectBehaviorType>
>(
  <B extends SelectBehaviorType>(
    { behavior, ...props }: ProductSubCategorySelectProps<B>,
    ref: ForwardedRef<SelectInstance>,
  ): JSX.Element => (
    <DataSelect<M, { behavior: B; getItemValue: typeof getItemValue }>
      {...props}
      ref={ref}
      data={[...ProductSubCategories.models]}
      options={{ behavior, getItemValue }}
      itemRenderer={(m, { isDisabled }) => (
        <ProductSubCategoryText subCategory={m.value} isDisabled={isDisabled} />
      )}
    />
  ),
) as {
  <B extends SelectBehaviorType>(
    props: ProductSubCategorySelectProps<B> & { readonly ref?: ForwardedRef<SelectInstance> },
  ): JSX.Element;
};
