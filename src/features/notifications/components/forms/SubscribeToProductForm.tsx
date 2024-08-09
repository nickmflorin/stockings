"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { toast } from "react-toastify";

import { logger } from "~/internal/logger";

import { subscribeToProduct } from "~/actions/mutations/products";

import { useProductSubscriptionForm } from "./hooks";
import {
  ProductSubscriptionForm,
  type ProductSubscriptionFormProps,
} from "./ProductSubscriptionForm";

export interface SubscribeToProductFormProps extends Omit<ProductSubscriptionFormProps, "form"> {
  readonly productId: string;
  readonly onSuccess?: () => void;
}

export const SubscribeToProductForm = ({
  productId,
  onSuccess,
  ...props
}: SubscribeToProductFormProps): JSX.Element => {
  const [pending, transition] = useTransition();
  const { refresh } = useRouter();

  const form = useProductSubscriptionForm();

  return (
    <ProductSubscriptionForm
      {...props}
      form={form}
      isLoading={pending}
      action={async data => {
        let response: Awaited<ReturnType<typeof subscribeToProduct>> | "NO_RESPONSE" =
          "NO_RESPONSE" as const;
        try {
          response = await subscribeToProduct(productId, data);
        } catch (e) {
          logger.errorUnsafe(e, `There was an error subscribing to product '${productId}'!`, {
            productId,
            data,
          });
          toast.error("There was an error subscribing to the product.");
        }
        if (response !== "NO_RESPONSE") {
          const { error } = response;
          if (error) {
            // form.handleApiError(response)
            toast.error("There was an error subscribing to the product.");
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
