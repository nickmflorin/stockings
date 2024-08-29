import { type ReactNode } from "react";

import { ProductNotificationType } from "~/database/model";

import { Form, type FormProps } from "~/components/forms/Form";
import { MultiCheckbox } from "~/components/input/MultiCheckbox";
import { Text } from "~/components/typography";

import { type ChooseNotificationTypesFormValues } from "./hooks";

export interface ChooseNotificationTypesFormProps
  extends Omit<
    FormProps<ChooseNotificationTypesFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {
  readonly withContext?: boolean;
  readonly withTooltips?: boolean;
}

const TooltipDescriptions: {
  [key in Exclude<
    ProductNotificationType,
    typeof ProductNotificationType.NewProductNotification
  >]: ReactNode;
} = {
  [ProductNotificationType.PriceChangeNotification]: (
    <Text inherit>
      If enabled, you will configure/receive notifications that are sent when the{" "}
      <Text component="span" fontWeight="semibold">
        price
      </Text>{" "}
      of the product changes.
    </Text>
  ),
  [ProductNotificationType.StatusChangeNotification]: (
    <Text inherit>
      If enabled, you will configure/receive notifications that are sent when the{" "}
      <Text component="span" fontWeight="semibold">
        inventory status
      </Text>{" "}
      of the product changes.
    </Text>
  ),
};

export const ChooseNotificationTypesForm = ({
  withContext = true,
  withTooltips = true,
  ...props
}: ChooseNotificationTypesFormProps) => (
  <Form {...props} contentClassName="gap-[12px]">
    <Form.ControlledField
      name="notificationTypes"
      form={props.form}
      descriptionSeparation={12}
      errorSeparation={16}
      label={withContext ? "Conditions" : undefined}
      description={
        withContext
          ? "Select the specific price change conditions that you would like to be notified " +
            "about for this product. At least 1 must be selected."
          : undefined
      }
    >
      {({ value, onChange }) => (
        <MultiCheckbox
          value={value}
          data={[
            {
              value: ProductNotificationType.PriceChangeNotification,
              label: "Notifications when Price Changes",
              tooltipDescription: withTooltips
                ? TooltipDescriptions[ProductNotificationType.PriceChangeNotification]
                : undefined,
            },
            {
              value: ProductNotificationType.StatusChangeNotification,
              label: "Notifications when Inventory Changes",
              tooltipDescription: withTooltips
                ? TooltipDescriptions[ProductNotificationType.StatusChangeNotification]
                : undefined,
            },
          ]}
          onChange={onChange}
        />
      )}
    </Form.ControlledField>
  </Form>
);

export default ChooseNotificationTypesForm;
