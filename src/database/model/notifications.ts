import { enumeratedLiterals, type EnumeratedLiteralsMember } from "enumerated-literals";

import type { TailwindBgColorClassName, TailwindTextColorClassName } from "~/components/types";

import { type BrandPriceChangeNotification, type BrandStatusChangeNotification } from "./brand";
import { type ConditionallyInclude } from "./inclusion";
import { NotificationState, ProductNotificationType, NotificationMedium } from "./models";
import { type Product, type User } from "./models";

export const ProductNotificationIncludesFields = enumeratedLiterals(
  ["product", "user"] as const,
  {},
);
export type ProductNotificationIncludesField = EnumeratedLiteralsMember<
  typeof ProductNotificationIncludesFields
>;

export type ProductNotificationIncludes =
  | ["product", "user"]
  | ["user", "product"]
  | ["user"]
  | ["product"]
  | [];

export type ApiPriceChangeNotification<I extends ProductNotificationIncludes = []> =
  ConditionallyInclude<
    BrandPriceChangeNotification & {
      readonly product: Product;
      readonly user: User;
    },
    ["product", "user"],
    I
  >;

export type ApiStatusChangeNotification<I extends ProductNotificationIncludes = []> =
  ConditionallyInclude<
    BrandStatusChangeNotification & {
      readonly product: Product;
      readonly user: User;
    },
    ["product", "user"],
    I
  >;

export type ApiProductNotification<I extends ProductNotificationIncludes = []> =
  I extends ProductNotificationIncludes
    ? ApiStatusChangeNotification<I> | ApiPriceChangeNotification<I>
    : never;

export const NotificationMediums = enumeratedLiterals(
  [
    {
      value: NotificationMedium.Application,
      label: "Application",
      description: "The notification will be sent to you in the application.",
      badgeTextColorClassName: "text-yellow-700",
      badgeBgColorClassName: "bg-yellow-200",
      textClassName: "text-yellow-700",
    },
    {
      value: NotificationMedium.Email,
      label: "Email",
      description: "The notification will be sent to your account email address.",
      badgeBgColorClassName: "bg-amber-200",
      badgeTextColorClassName: "text-amber-600",
      textClassName: "text-amber-600",
    },
    {
      value: NotificationMedium.SMS,
      label: "SMS",
      description: "The notification will be sent via SMS to your configured phone number.",
      badgeBgColorClassName: "bg-green-200",
      badgeTextColorClassName: "text-green-600",
      textClassName: "text-green-600",
    },
  ] as const satisfies {
    value: NotificationMedium;
    description: string;
    label: string;
    badgeTextColorClassName: TailwindTextColorClassName;
    badgeBgColorClassName: TailwindBgColorClassName;
    textClassName: TailwindTextColorClassName;
  }[],
  {},
);

export const NotificationStates = enumeratedLiterals(
  [
    {
      value: NotificationState.Failed,
      label: "Failed",
      description: "The notification failed to send.",
      textClassName: "text-red-600",
    },
    {
      value: NotificationState.Pending,
      label: "Pending",
      description: "The notification is about to be sent.",
      textClassName: "text-gray-600",
    },
    {
      value: NotificationState.Sent,
      label: "Sent",
      description: "The notification was successfully sent.",
      textClassName: "text-green-600",
    },
  ] as const satisfies {
    value: NotificationState;
    description: string;
    label: string;
    textClassName: TailwindTextColorClassName;
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
