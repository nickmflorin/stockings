"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { toast } from "react-toastify";

import { logger } from "~/internal/logger";

import { subscribeToPriceChanges } from "~/actions/subscriptions";

import { usePriceChangeSubscriptionForm } from "./hooks";
import {
  PriceChangeSubscriptionForm,
  type PriceChangeSubscriptionFormProps,
} from "./PriceChangeSubscriptionForm";

export interface SubscribeToPriceChangesFormProps
  extends Omit<PriceChangeSubscriptionFormProps, "form"> {
  readonly productId: string;
  readonly onSuccess?: () => void;
}

export const SubscribeToPriceChangesForm = ({
  productId,
  onSuccess,
  ...props
}: SubscribeToPriceChangesFormProps): JSX.Element => {
  const [pending, transition] = useTransition();
  const { refresh } = useRouter();

  const form = usePriceChangeSubscriptionForm();

  return (
    <PriceChangeSubscriptionForm
      {...props}
      form={form}
      isLoading={pending}
      action={async data => {
        let response: Awaited<ReturnType<typeof subscribeToPriceChanges>> | null = null;
        try {
          response = await subscribeToPriceChanges(productId, data);
        } catch (e) {
          logger.errorUnsafe(
            e,
            `There was an error subscribing to price changes of product '${productId}'!`,
            { productId, data },
          );
          toast.error("There was an error subscribing to the product.");
        }
        if (response) {
          const { error } = response;
          if (error) {
            logger.error(
              `There was an error subscribing to price changes of product '${productId}'!`,
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
