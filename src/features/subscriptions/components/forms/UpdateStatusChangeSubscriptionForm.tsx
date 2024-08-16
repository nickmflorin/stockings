"use client";
import { useRouter } from "next/navigation";
import { useTransition, useEffect } from "react";

import { toast } from "react-toastify";

import { logger } from "~/internal/logger";

import { updateStatusChangeSubscription } from "~/actions/mutations/subscriptions";

import { useStatusChangeSubscription } from "~/hooks/api";

import { useStatusChangeSubscriptionForm } from "./hooks";
import {
  StatusChangeSubscriptionForm,
  type StatusChangeSubscriptionFormProps,
} from "./StatusChangeSubscriptionForm";

export interface UpdateStatusChangeSubscriptionFormProps
  extends Omit<StatusChangeSubscriptionFormProps, "form"> {
  readonly subscriptionId: string;
  readonly productId: string;
  readonly onSuccess?: () => void;
}

export const UpdateStatusChangeSubscriptionForm = ({
  subscriptionId,
  productId,
  onSuccess,
  ...props
}: UpdateStatusChangeSubscriptionFormProps): JSX.Element => {
  const [pending, transition] = useTransition();
  const { refresh } = useRouter();

  const form = useStatusChangeSubscriptionForm();

  // TODO: Handle error!
  const { data: subscription, isLoading } = useStatusChangeSubscription(subscriptionId, {
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
    <StatusChangeSubscriptionForm
      {...props}
      form={form}
      isLoading={isLoading || pending}
      isDisabled={isLoading}
      action={async data => {
        let response: Awaited<ReturnType<typeof updateStatusChangeSubscription>> | null = null;
        try {
          response = await updateStatusChangeSubscription(subscriptionId, data);
        } catch (e) {
          logger.errorUnsafe(
            e,
            `There was an error updating the status change subscription '${subscriptionId}' ` +
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
