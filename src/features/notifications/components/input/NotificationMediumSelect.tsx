import { forwardRef, type ForwardedRef } from "react";

import { NotificationMediums, type NotificationMedium } from "~/database/model";

import type { SelectBehaviorType, DataSelectInstance } from "~/components/input/select";
import { DataSelect, type DataSelectProps } from "~/components/input/select/DataSelect";
import { NotificationMediumText } from "~/features/notifications/components/NotificationMediumText";

type M = { readonly value: NotificationMedium };

const getItemValue = (m: M) => NotificationMediums.getModel(m.value).value;

export interface NotificationMediumSelectProps<B extends SelectBehaviorType>
  extends Omit<
    DataSelectProps<M, { behavior: B; getItemValue: typeof getItemValue }>,
    "options" | "data" | "itemIsDisabled"
  > {
  readonly behavior: B;
}

export const NotificationMediumSelect = forwardRef(
  <B extends SelectBehaviorType>(
    { behavior, ...props }: NotificationMediumSelectProps<B>,
    ref: ForwardedRef<DataSelectInstance<M, { behavior: B; getItemValue: typeof getItemValue }>>,
  ): JSX.Element => (
    <DataSelect<M, { behavior: B; getItemValue: typeof getItemValue }>
      {...props}
      ref={ref}
      data={[...NotificationMediums.models]}
      options={{ behavior, getItemValue }}
      itemRenderer={(m, { isDisabled }) => (
        <NotificationMediumText medium={m.value} isDisabled={isDisabled} />
      )}
    />
  ),
) as {
  <B extends SelectBehaviorType>(
    props: NotificationMediumSelectProps<B> & {
      readonly ref?: ForwardedRef<
        DataSelectInstance<M, { behavior: B; getItemValue: typeof getItemValue }>
      >;
    },
  ): JSX.Element;
};
