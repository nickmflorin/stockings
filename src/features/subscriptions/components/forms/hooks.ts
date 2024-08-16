import { type z } from "zod";

import { ProductStatus, PriceChangeSubscriptionCondition } from "~/database/model";

import { StatusChangeSubscriptionSchema, PriceChangeSubscriptionSchema } from "~/actions/schemas";

import { useForm } from "~/components/forms/hooks";

export const useStatusChangeSubscriptionForm = () =>
  useForm({
    schema: StatusChangeSubscriptionSchema,
    defaultValues: {
      enabled: true,
      conditions: [
        {
          fromStatus: [ProductStatus.OutOfStock],
          toStatus: [ProductStatus.InStock],
        },
      ],
    },
  });

export type StatusChangeSubscriptionFormValues = z.infer<typeof StatusChangeSubscriptionSchema>;

export const usePriceChangeSubscriptionForm = () =>
  useForm({
    schema: PriceChangeSubscriptionSchema,
    defaultValues: {
      enabled: true,
      conditions: [
        PriceChangeSubscriptionCondition.PriceIncrease,
        PriceChangeSubscriptionCondition.PriceDecrease,
      ],
    },
  });

export type PriceChangeSubscriptionFormValues = z.infer<typeof PriceChangeSubscriptionSchema>;