import { forwardRef, type ForwardedRef } from "react";

import { ProductStatuses, type ProductStatus } from "~/database/model";

import type { SelectBehaviorType, DataSelectInstance } from "~/components/input/select";
import { DataSelect, type DataSelectProps } from "~/components/input/select/DataSelect";
import { ProductStatusText } from "~/features/products/components/ProductStatusText";

type M = { readonly value: ProductStatus };

const getItemValue = (m: M) => ProductStatuses.getModel(m.value).value;

export interface ProductStatusSelectProps<B extends SelectBehaviorType>
  extends Omit<
    DataSelectProps<M, { behavior: B; getItemValue: typeof getItemValue }>,
    "options" | "data" | "itemIsDisabled"
  > {
  readonly behavior: B;
  readonly disabledStatuses?: ProductStatus[];
}

export const ProductStatusSelect = forwardRef(
  <B extends SelectBehaviorType>(
    { behavior, disabledStatuses, ...props }: ProductStatusSelectProps<B>,
    ref: ForwardedRef<DataSelectInstance<M, { behavior: B; getItemValue: typeof getItemValue }>>,
  ): JSX.Element => (
    <DataSelect<M, { behavior: B; getItemValue: typeof getItemValue }>
      {...props}
      ref={ref}
      data={[...ProductStatuses.models]}
      itemIsDisabled={m => disabledStatuses?.includes(m.value) ?? false}
      options={{ behavior, getItemValue }}
      getItemValueLabel={m => ProductStatuses.getModel(m.value).shortLabel}
      itemRenderer={(m, { isDisabled }) => (
        <ProductStatusText status={m.value} isDisabled={isDisabled} />
      )}
    />
  ),
) as {
  <B extends SelectBehaviorType>(
    props: ProductStatusSelectProps<B> & {
      readonly ref?: ForwardedRef<
        DataSelectInstance<M, { behavior: B; getItemValue: typeof getItemValue }>
      >;
    },
  ): JSX.Element;
};
