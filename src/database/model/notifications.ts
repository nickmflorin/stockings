import { enumeratedLiterals } from "enumerated-literals";

import { NotificationState, NotificationType } from "./generated";

export const NotificationStates = enumeratedLiterals(
  [
    {
      value: NotificationState.Failed,
      label: "Failed",
      description: "The notification failed to send.",
    },
    {
      value: NotificationState.Pending,
      label: "Pending",
      description: "The notification is about to be sent.",
    },
    {
      value: NotificationState.Sent,
      label: "Out of Stock",
      description: "The notification was successfully sent.",
    },
  ] as const satisfies {
    value: NotificationState;
    description: string;
    label: string;
  }[],
  {},
);

export const NotificationTypes = enumeratedLiterals(
  [
    {
      value: NotificationType.NewProductNotification,
      label: "New Product",
      description: "A notification that is sent when a new product is added.",
    },
    {
      value: NotificationType.PriceChangeNotification,
      label: "Price Change",
      description: "A notification that is sent when a product's price changes.",
    },
    {
      value: NotificationType.StatusChangeNotification,
      label: "Status Change",
      description: "A notification that is sent when a product's status changes.",
    },
  ] as const satisfies {
    value: NotificationType;
    description: string;
    label: string;
  }[],
  {},
);
