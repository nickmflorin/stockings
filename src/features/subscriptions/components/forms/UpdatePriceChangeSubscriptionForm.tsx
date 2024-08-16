"use client";
import { useRouter } from "next/navigation";
import { useTransition, useEffect } from "react";

import { toast } from "react-toastify";

import { logger } from "~/internal/logger";

import { updatePriceChangeSubscription } from "~/actions/mutations/subscriptions";

import { usePriceChangeSubscription } from "~/hooks/api";

import { usePriceChangeSubscriptionForm } from "./hooks";
import {
  PriceChangeSubscriptionForm,
  type PriceChangeSubscriptionFormProps,
} from "./PriceChangeSubscriptionForm";

export interface UpdatePriceChangeSubscriptionFormProps
  extends Omit<PriceChangeSubscriptionFormProps, "form"> {
  readonly subscriptionId: string;
  readonly productId: string;
  readonly onSuccess?: () => void;
}

export const UpdatePriceChangeSubscriptionForm = ({
  subscriptionId,
  productId,
  onSuccess,
  ...props
}: UpdatePriceChangeSubscriptionFormProps): JSX.Element => {
  const [pending, transition] = useTransition();
  const { refresh } = useRouter();

  const form = usePriceChangeSubscriptionForm();

  // TODO: Handle error!
  const { data: subscription, isLoading } = usePriceChangeSubscription(subscriptionId, {
    query: {},
  });

  useEffect(() => {
    if (subscription) {
      form.setValue("enabled", subscription.enabled);
      form.setValue("conditions", subscription.conditions);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [subscription]);

  return (
    <PriceChangeSubscriptionForm
      {...props}
      form={form}
      isLoading={isLoading || pending}
      isDisabled={isLoading}
      action={async data => {
        let response: Awaited<ReturnType<typeof updatePriceChangeSubscription>> | null = null;
        try {
          response = await updatePriceChangeSubscription(subscriptionId, data);
        } catch (e) {
          logger.errorUnsafe(
            e,
            `There was an error updating the price change subscription '${subscriptionId}' ` +
              `for product '${productId}'!`,
            { productId, subscriptionId, data },
          );
          toast.error("There was an error updating the product subscription.");
        }
        if (response) {
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
