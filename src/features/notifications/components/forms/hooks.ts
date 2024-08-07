import { type z } from "zod";

import { ProductStatus } from "~/database/model";

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

/* export const ProductNotificationEventsSchema = z.object({
     product: z.string(),
     priceChange: z
       .object({
         enabled: z.boolean(),
         events: z.array(z.nativeEnum(PriceChangeEventType)),
       })
       .optional(),
     statusChange: z
       .object({
         enabled: z.boolean(),
         events: z.array(
           z.object({
             fromStatus: z.array(z.nativeEnum(ProductStatus)),
             toStatus: z.array(z.nativeEnum(ProductStatus)),
           }),
         ),
       })
       .optional(),
   }); */

const ProductNotificationEventsFormSchema = ProductNotificationEventsSchema.omit({
  product: true,
})
  .refine(
    data => {
      if (data.priceChange?.enabled) {
        return data.priceChange.events.length > 0;
      }
      return true;
    },
    { message: "At least one event must be selected.", path: ["priceChange.events"] },
  )
  .refine(
    data => {
      if (data.statusChange?.enabled) {
        return data.statusChange.events.length > 0;
      }
      return true;
    },
    { message: "At least one event must be selected.", path: ["statusChange.events"] },
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
        events: [{ fromStatus: [ProductStatus.OUT_OF_STOCK], toStatus: [ProductStatus.IN_STOCK] }],
      },
    },
  });

export type ProductNotificationEventsFormValues = z.infer<
  typeof ProductNotificationEventsFormSchema
>;
