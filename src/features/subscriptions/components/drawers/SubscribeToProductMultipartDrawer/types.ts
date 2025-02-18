import { enumeratedLiterals, type EnumeratedLiteralsMember } from "enumerated-literals";

import type {
  StatusChangeSubscriptionFormValues,
  PriceChangeSubscriptionFormValues,
} from "../../forms";

import { type ProductNotificationType, type NotificationMedium } from "~/database/model";

import type { FormInstance } from "~/components/forms";
import {
  type NotificationMediumsFormValues,
  type NotificationTypesFormValues,
} from "~/features/notifications/components/forms";

export const StepNames = enumeratedLiterals(
  ["configure", "mediums", "statusChange", "priceChange"] as const,
  {},
);
export type StepName = EnumeratedLiteralsMember<typeof StepNames>;

export type StepData<N extends StepName> = {
  [StepNames.CONFIGURE]: ProductNotificationType[];
  [StepNames.MEDIUMS]: NotificationMedium[];
  [StepNames.STATUSCHANGE]: StatusChangeSubscriptionFormValues;
  [StepNames.PRICECHANGE]: PriceChangeSubscriptionFormValues;
}[N];

export type StepsData = { [key in StepName]: StepData<key> | null };

export type StepFormValues<N extends StepName> = {
  [StepNames.CONFIGURE]: NotificationTypesFormValues;
  [StepNames.MEDIUMS]: NotificationMediumsFormValues;
  [StepNames.STATUSCHANGE]: StatusChangeSubscriptionFormValues;
  [StepNames.PRICECHANGE]: PriceChangeSubscriptionFormValues;
}[N];

export type StepForms<N extends StepName> = {
  [StepNames.CONFIGURE]: FormInstance<NotificationTypesFormValues>;
  [StepNames.MEDIUMS]: FormInstance<NotificationMediumsFormValues>;
  [StepNames.STATUSCHANGE]: FormInstance<StatusChangeSubscriptionFormValues>;
  [StepNames.PRICECHANGE]: FormInstance<PriceChangeSubscriptionFormValues>;
}[N];

export type StepsForms = { [key in StepName]: FormInstance<StepFormValues<key>> };

export const StepLabels: { [key in StepName]: string } = {
  [StepNames.CONFIGURE]: "Notification Events",
  [StepNames.MEDIUMS]: "Notification Mediums",
  [StepNames.STATUSCHANGE]: "Status/Inventory Change Events",
  [StepNames.PRICECHANGE]: "Price Change Events",
};

export const StepDescriptions: { [key in StepName]: string } = {
  [StepNames.CONFIGURE]:
    "First, choose the types of events that you would like to receive notifications for.",
  [StepNames.MEDIUMS]:
    "Next, choose the mediums over which you would like to receive notifications for the product.",
  [StepNames.STATUSCHANGE]: "What inventory changes would you like to receive notifications for?",
  [StepNames.PRICECHANGE]: "What price change events would you like to receive notifications for?",
};
