import { enumeratedLiterals, type EnumeratedLiteralsMember } from "enumerated-literals";

import {
  type BrandPriceChangeNotification,
  type BrandStatusChangeNotification,
} from "~/database/model";

import { NotificationState, ProductNotificationType } from "./generated";
import { type ConditionallyInclude } from "./inclusion";
import { type Product } from "./zenstack-generated/models";

export const ProductNotificationIncludesFields = enumeratedLiterals(["product"] as const, {});
export type ProductNotificationIncludesField = EnumeratedLiteralsMember<
  typeof ProductNotificationIncludesFields
>;

export type ProductNotificationIncludes = ["product"] | [];

export type ApiProductNotification<I extends ProductNotificationIncludes = []> =
  | ConditionallyInclude<
      BrandPriceChangeNotification & {
        readonly product: Product;
      },
      ["product"],
      I
    >
  | ConditionallyInclude<
      BrandStatusChangeNotification & {
        readonly product: Product;
      },
      ["product"],
      I
    >;

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
      label: "Sent",
      description: "The notification was successfully sent.",
    },
  ] as const satisfies {
    value: NotificationState;
    description: string;
    label: string;
  }[],
  {},
);

export const ProductNotificationTypes = enumeratedLiterals(
  [
    {
      value: ProductNotificationType.PriceChangeNotification,
      label: "Price Change",
      description: "A notification that is sent when a product's price changes.",
    },
    {
      value: ProductNotificationType.StatusChangeNotification,
      label: "Status Change",
      description: "A notification that is sent when a product's status changes.",
    },
  ] as const satisfies {
    value: ProductNotificationType;
    description: string;
    label: string;
  }[],
  {},
);
