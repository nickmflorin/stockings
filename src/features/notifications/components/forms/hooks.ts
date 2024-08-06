import { type z } from "zod";

import {
  PriceChangeEventSchema,
  StatusChangeEventSchema,
  ProductNotificationEventsSchema,
} from "~/actions/schemas";

import { useForm } from "~/components/forms/hooks";

export const usePriceChangeEventForm = () =>
  useForm({
    schema: PriceChangeEventSchema.omit({ product: true }).required(),
    defaultValues: {
      eventTypes: [],
    },
  });

export const useStatusChangeEventForm = () =>
  useForm({
    schema: StatusChangeEventSchema.omit({ product: true }).required(),
    defaultValues: {
      eventTypes: [],
    },
  });

const ProductNotificationEventsFormSchema = ProductNotificationEventsSchema.omit({
  product: true,
}).refine(
  data => {
    if (data.priceChange?.enabled) {
      return data.priceChange.events.length > 0;
    }
    return true;
  },
  { message: "blah", path: ["priceChange.events"] },
);

export const useProductNotificationEventsForm = () =>
  useForm({
    schema: ProductNotificationEventsFormSchema,
    defaultValues: {
      priceChange: {
        enabled: false,
        events: [],
      },
      statusChange: {
        enabled: true,
        events: [],
      },
    },
  });

export type ProductNotificationEventsFormValues = z.infer<
  typeof ProductNotificationEventsFormSchema
>;
