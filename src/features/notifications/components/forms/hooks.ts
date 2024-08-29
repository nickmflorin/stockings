import { z } from "zod";

import { ProductNotificationType } from "~/database/model";

import { useForm } from "~/components/forms/hooks";

export const useChooseNotificationTypesForm = () =>
  useForm({
    schema: ChooseNotificationTypesSchema,
    defaultValues: {
      notificationTypes: [],
    },
  });

const ChooseNotificationTypesSchema = z.object({
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

export type ChooseNotificationTypesFormValues = z.infer<typeof ChooseNotificationTypesSchema>;
