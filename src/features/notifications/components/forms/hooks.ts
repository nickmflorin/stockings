import { type z } from "zod";

import { ProductStatus, PriceChangeEventCondition } from "~/database/model";

import { ProductSubscriptionSchema } from "~/actions/schemas";

import { useForm } from "~/components/forms/hooks";

export const useProductSubscriptionForm = () =>
  useForm({
    schema: ProductSubscriptionSchema,
    defaultValues: {
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
            fromStatus: [],
            anyFromStatus: true,
            toStatus: [ProductStatus.InStock],
            anyToStatus: false,
          },
        ],
      },
    },
  });

export type ProductSubscriptionFormValues = z.infer<typeof ProductSubscriptionSchema>;
