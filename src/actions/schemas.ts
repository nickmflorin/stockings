import { z } from "zod";

import { ProductStatus, PriceChangeEventType } from "~/database/model";

export const StatusChangeEventSchema = z.object({
  product: z.string(),
  eventTypes: z.array(z.nativeEnum(ProductStatus)).min(1),
});

export const PriceChangeEventSchema = z.object({
  product: z.string(),
  eventTypes: z.array(z.nativeEnum(PriceChangeEventType)).min(1),
});

export const NotificationEventSchema = z.union([StatusChangeEventSchema, PriceChangeEventSchema]);

export const ProductNotificationEventsSchema = z.object({
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
      // .min(1),
    })
    .optional(),
});
