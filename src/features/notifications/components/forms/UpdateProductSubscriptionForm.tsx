"use client";
import { useRouter } from "next/navigation";
import { useTransition, useEffect } from "react";

import { toast } from "react-toastify";

import { logger } from "~/internal/logger";

import { updateProductSubscription } from "~/actions/mutations/products";

import { useProductSubscription } from "~/hooks/api";

import { isApiClientFormErrorJson, isApiClientGlobalErrorJson } from "~/api";

import { useProductSubscriptionForm } from "./hooks";
import {
  ProductSubscriptionForm,
  type ProductSubscriptionFormProps,
} from "./ProductSubscriptionForm";

export interface UpdateProductSubscriptionFormProps
  extends Omit<ProductSubscriptionFormProps, "form"> {
  readonly subscriptionId: string;
  readonly productId: string;
  readonly onSuccess?: () => void;
}

export const UpdateProductSubscriptionForm = ({
  subscriptionId,
  productId,
  onSuccess,
  ...props
}: UpdateProductSubscriptionFormProps): JSX.Element => {
  const [pending, transition] = useTransition();
  const { refresh } = useRouter();

  const form = useProductSubscriptionForm();

  const { data: subscription, isLoading } = useProductSubscription(subscriptionId, { query: {} });

  useEffect(() => {
    if (subscription) {
      /* Note: I do not understand why we can't just set the 'statusChange' and 'priceChange'
         objects directly... */
      if (subscription.priceChange) {
        form.setValue("priceChange.enabled", subscription.priceChange.enabled);
        form.setValue("priceChange.conditions", subscription.priceChange.conditions);
      }
      if (subscription.statusChange) {
        form.setValue("statusChange.enabled", subscription.statusChange.enabled);
        form.setValue("statusChange.conditions", subscription.statusChange.conditions);
      }
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [subscription]);

  return (
    <ProductSubscriptionForm
      {...props}
      form={form}
      isLoading={isLoading || pending}
      isDisabled={isLoading}
      action={async data => {
        let response: Awaited<ReturnType<typeof updateProductSubscription>> | "NO_RESPONSE" =
          "NO_RESPONSE" as const;
        try {
          response = await updateProductSubscription(subscriptionId, data);
        } catch (e) {
          logger.errorUnsafe(
            e,
            `There was an error updating the subscription '${subscriptionId}' for product '${productId}'!`,
            { productId, subscriptionId, data },
          );
          toast.error("There was an error updating the product subscription.");
        }
        if (response !== "NO_RESPONSE") {
          const { error } = response;
          if (error) {
            // form.handleApiError(response)
            toast.error("There was an error updating the product subscription.");
          } else {
            transition(() => {
              refresh();
            });
            toast.success("Successfully updated the product subscription.");
            onSuccess?.();
          }
        }
      }}
    />
  );
};
