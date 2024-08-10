import { type z } from "zod";

import { ProductStatus, PriceChangeEventCondition } from "~/database/model";

import { ProductSubscriptionSchema } from "~/actions/schemas";

import { useForm } from "~/components/forms/hooks";

export const useProductSubscriptionForm = () =>
  useForm({
    schema: ProductSubscriptionSchema,
    defaultValues: {
      enabled: true,
      priceChange: {
        enabled: false,
        conditions: [
          PriceChangeEventCondition.PriceIncrease,
          PriceChangeEventCondition.PriceDecrease,
        ],
      },
      statusChange: {
        enabled: true,
        conditions: [
          {
            fromStatus: [ProductStatus.OutOfStock],
            toStatus: [ProductStatus.InStock],
          },
        ],
      },
    },
  });

export type ProductSubscriptionFormValues = z.infer<typeof ProductSubscriptionSchema>;
