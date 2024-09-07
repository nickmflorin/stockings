"use client";
import { useRouter } from "next/navigation";
import { useTransition, useEffect } from "react";

import { toast } from "react-toastify";

import { logger } from "~/internal/logger";

import { updateStatusChangeSubscription } from "~/actions/subscriptions";

import { Error } from "~/components/errors/Error";
import { ButtonFooter } from "~/components/structural/ButtonFooter";
import { useStatusChangeSubscription } from "~/hooks/api";

import { useStatusChangeSubscriptionForm } from "./hooks";
import {
  StatusChangeSubscriptionForm,
  type StatusChangeSubscriptionFormProps,
} from "./StatusChangeSubscriptionForm";

export interface UpdateStatusChangeSubscriptionFormProps
  extends Omit<StatusChangeSubscriptionFormProps, "form" | "footer" | "action"> {
  readonly subscriptionId: string;
  readonly productId: string;
  readonly onCancel?: () => void;
  readonly onSuccess?: () => void;
}

export const UpdateStatusChangeSubscriptionForm = ({
  subscriptionId,
  productId,
  onCancel,
  onSuccess,
  ...props
}: UpdateStatusChangeSubscriptionFormProps): JSX.Element => {
  const [pending, transition] = useTransition();
  const { refresh } = useRouter();

  const form = useStatusChangeSubscriptionForm();

  const {
    data: subscription,
    isLoading,
    error,
  } = useStatusChangeSubscription(subscriptionId, {
    query: { includes: ["conditions"] },
  });

  useEffect(() => {
    if (error) {
      logger.error(
        error,
        `There was an error fetching the status change subscription '${subscriptionId}' ` +
          `for product '${productId}'!`,
        { productId, subscriptionId },
      );
    }
  }, [error, productId, subscriptionId]);

  useEffect(() => {
    if (subscription) {
      form.setValue("enabled", subscription.enabled);
      form.setValue("conditions", subscription.conditions);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [subscription]);

  return (
    <Error error={error} message="There was an error loading the subscription.">
      <StatusChangeSubscriptionForm
        {...props}
        form={form}
        footer={<ButtonFooter submitText="Save" orientation="full-width" onCancel={onCancel} />}
        isLoading={isLoading || pending || props.isLoading}
        isDisabled={isLoading || props.isDisabled}
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
              logger.error(
                `There was an error updating the status change subscription '${subscriptionId}' ` +
                  `for product '${productId}'!`,
                { productId, subscriptionId, data, error },
              );
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
    </Error>
  );
};
