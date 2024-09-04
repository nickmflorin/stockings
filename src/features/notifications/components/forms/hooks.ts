import { z } from "zod";

import { ProductNotificationType, NotificationMedium } from "~/database/model";

import { useForm } from "~/components/forms/hooks";

const NotificationTypesSchema = z.object({
  notificationTypes: z
    .array(
      z.union([
        z.literal(ProductNotificationType.PriceChangeNotification),
        z.literal(ProductNotificationType.StatusChangeNotification),
      ]),
    )
    .min(
      1,
      "In order to subscribe, you must choose at least 1 event to receive notifications for.",
    ),
});

export const useNotificationTypesForm = () =>
  useForm({
    schema: NotificationTypesSchema,
    defaultValues: {
      notificationTypes: [],
    },
  });

export type NotificationTypesFormValues = z.infer<typeof NotificationTypesSchema>;

const NotificationMediumsSchema = z.object({
  mediums: z
    .array(
      z.union([
        z.literal(NotificationMedium.Application),
        z.literal(NotificationMedium.Email),
        z.literal(NotificationMedium.SMS),
      ]),
    )
    .min(
      1,
      "In order to subscribe, you must choose at least 1 event to medium over which " +
        "your notifications will be sent.",
    ),
});

export const useNotificationMediumsForm = () =>
  useForm({
    schema: NotificationMediumsSchema,
    defaultValues: {
      mediums: [NotificationMedium.Application],
    },
  });

export type NotificationMediumsFormValues = z.infer<typeof NotificationMediumsSchema>;
