import { forwardRef, type ForwardedRef } from "react";

import { ProductSubscriptionTypes, type ProductSubscriptionType } from "~/database/model";

import type { SelectBehaviorType, SelectInstance } from "~/components/input/select";
import { DataSelect, type DataSelectProps } from "~/components/input/select/DataSelect";
import { SubscriptionTypeText } from "~/features/subscriptions/components/SubscriptionTypeText";

type M = { readonly value: ProductSubscriptionType };

const getItemValue = (m: M) => ProductSubscriptionTypes.getModel(m.value).value;

export interface SubscriptionTypeSelectProps<B extends SelectBehaviorType>
  extends Omit<
    DataSelectProps<M, { behavior: B; getItemValue: typeof getItemValue }>,
    "options" | "data" | "itemIsDisabled"
  > {
  readonly behavior: B;
}

export const SubscriptionTypeSelect = forwardRef<
  SelectInstance,
  SubscriptionTypeSelectProps<SelectBehaviorType>
>(
  <B extends SelectBehaviorType>(
    { behavior, ...props }: SubscriptionTypeSelectProps<B>,
    ref: ForwardedRef<SelectInstance>,
  ): JSX.Element => (
    <DataSelect<M, { behavior: B; getItemValue: typeof getItemValue }>
      {...props}
      ref={ref}
      data={[...ProductSubscriptionTypes.models]}
      options={{ behavior, getItemValue }}
      itemRenderer={(m, { isDisabled }) => (
        <SubscriptionTypeText subscriptionType={m.value} isDisabled={isDisabled} />
      )}
    />
  ),
) as {
  <B extends SelectBehaviorType>(
    props: SubscriptionTypeSelectProps<B> & { readonly ref?: ForwardedRef<SelectInstance> },
  ): JSX.Element;
};
