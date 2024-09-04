import { forwardRef, type ForwardedRef } from "react";

import { ProductCategories, type ProductCategory } from "~/database/model";

import type { DataSelectInstance, SelectBehaviorType } from "~/components/input/select";
import { DataSelect, type DataSelectProps } from "~/components/input/select/DataSelect";
import { ProductCategoryText } from "~/features/products/components/ProductCategoryText";

type M = { readonly value: ProductCategory };

const getItemValue = (m: M) => ProductCategories.getModel(m.value).value;

export interface ProductCategorySelectProps<B extends SelectBehaviorType>
  extends Omit<
    DataSelectProps<M, { behavior: B; getItemValue: typeof getItemValue }>,
    "options" | "data" | "itemIsDisabled"
  > {
  readonly behavior: B;
}

export const ProductCategorySelect = forwardRef(
  <B extends SelectBehaviorType>(
    { behavior, ...props }: ProductCategorySelectProps<B>,
    ref: ForwardedRef<DataSelectInstance<M, { behavior: B; getItemValue: typeof getItemValue }>>,
  ): JSX.Element => (
    <DataSelect<M, { behavior: B; getItemValue: typeof getItemValue }>
      {...props}
      ref={ref}
      menuClassName="min-h-[30px]"
      data={[...ProductCategories.models]}
      options={{ behavior, getItemValue }}
      itemRenderer={(m, { isDisabled }) => (
        <ProductCategoryText category={m.value} isDisabled={isDisabled} />
      )}
    />
  ),
) as {
  <B extends SelectBehaviorType>(
    props: ProductCategorySelectProps<B> & {
      readonly ref?: ForwardedRef<
        DataSelectInstance<M, { behavior: B; getItemValue: typeof getItemValue }>
      >;
    },
  ): JSX.Element;
};
