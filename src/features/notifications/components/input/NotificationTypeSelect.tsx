import { forwardRef, type ForwardedRef } from "react";

import { ProductNotificationTypes, type ProductNotificationType } from "~/database/model";

import type { SelectBehaviorType, SelectInstance } from "~/components/input/select";
import { DataSelect, type DataSelectProps } from "~/components/input/select/DataSelect";
import { NotificationTypeText } from "~/features/notifications/components/NotificationTypeText";

type M = { readonly value: ProductNotificationType };

const getItemValue = (m: M) => ProductNotificationTypes.getModel(m.value).value;

export interface NotificationTypeSelectProps<B extends SelectBehaviorType>
  extends Omit<
    DataSelectProps<M, { behavior: B; getItemValue: typeof getItemValue }>,
    "options" | "data" | "itemIsDisabled"
  > {
  readonly behavior: B;
}

export const NotificationTypeSelect = forwardRef<
  SelectInstance,
  NotificationTypeSelectProps<SelectBehaviorType>
>(
  <B extends SelectBehaviorType>(
    { behavior, ...props }: NotificationTypeSelectProps<B>,
    ref: ForwardedRef<SelectInstance>,
  ): JSX.Element => (
    <DataSelect<M, { behavior: B; getItemValue: typeof getItemValue }>
      {...props}
      ref={ref}
      data={[...ProductNotificationTypes.models]}
      options={{ behavior, getItemValue }}
      itemRenderer={(m, { isDisabled }) => (
        <NotificationTypeText notificationType={m.value} isDisabled={isDisabled} />
      )}
    />
  ),
) as {
  <B extends SelectBehaviorType>(
    props: NotificationTypeSelectProps<B> & { readonly ref?: ForwardedRef<SelectInstance> },
  ): JSX.Element;
};
