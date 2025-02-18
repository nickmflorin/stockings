"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { toast } from "react-toastify";

import { logger } from "~/internal/logger";

import { subscribeToStatusChanges } from "~/actions/subscriptions";

import { ButtonFooter } from "~/components/structural/ButtonFooter";

import { useStatusChangeSubscriptionForm } from "./hooks";
import {
  StatusChangeSubscriptionForm,
  type StatusChangeSubscriptionFormProps,
} from "./StatusChangeSubscriptionForm";

export interface SubscribeToStatusChangesFormProps
  extends Omit<StatusChangeSubscriptionFormProps, "form" | "footer" | "action"> {
  readonly productId: string;
  readonly onCancel?: () => void;
  readonly onSuccess?: () => void;
}

export const SubscribeToStatusChangesForm = ({
  productId,
  onCancel,
  onSuccess,
  ...props
}: SubscribeToStatusChangesFormProps): JSX.Element => {
  const [pending, transition] = useTransition();
  const { refresh } = useRouter();
  const form = useStatusChangeSubscriptionForm();
  return (
    <StatusChangeSubscriptionForm
      {...props}
      form={form}
      isLoading={pending || props.isLoading}
      footer={<ButtonFooter submitText="Subscribe" orientation="full-width" onCancel={onCancel} />}
      action={async data => {
        let response: Awaited<ReturnType<typeof subscribeToStatusChanges>> | null = null;
        try {
          response = await subscribeToStatusChanges(productId, data);
        } catch (e) {
          logger.errorUnsafe(
            e,
            `There was an error subscribing to status changes of product '${productId}'!`,
            { productId, data },
          );
          toast.error("There was an error subscribing to the product.");
        }
        if (response) {
          const { error } = response;
          if (error) {
            logger.error(
              `There was an error subscribing to status changes of product '${productId}'!`,
              { productId, data, error },
            );
            // form.handleApiError(response)
            toast.error("There was an error subscribing to the product.");
          } else {
            transition(() => {
              refresh();
            });
            toast.success("Successfully subscribed to the product.");
            onSuccess?.();
          }
        }
      }}
    />
  );
};
