import { type ReactNode } from "react";

import { NotificationMedium } from "~/database/model";

import { Form, type FormProps } from "~/components/forms/Form";
import { MultiCheckbox } from "~/components/input/MultiCheckbox";
import { Text } from "~/components/typography";

import { type NotificationMediumsFormValues } from "./hooks";

export interface NotificationMediumsFormProps
  extends Omit<
    FormProps<NotificationMediumsFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {
  readonly withContext?: boolean;
  readonly withTooltips?: boolean;
}

const TooltipDescriptions: {
  [key in NotificationMedium]: ReactNode;
} = {
  [NotificationMedium.Application]: (
    <Text inherit>
      If selected, notifications for this product will be sent in the{" "}
      <Text component="span" fontWeight="semibold">
        application
      </Text>{" "}
      and can be viewable in the &quot;Notifications&quot; section.
    </Text>
  ),
  [NotificationMedium.Email]: (
    <Text inherit>
      If selected, notifications for this product will be sent to the{" "}
      <Text component="span" fontWeight="semibold">
        email address
      </Text>{" "}
      that your account is registered with.
    </Text>
  ),
  [NotificationMedium.SMS]: (
    <Text inherit>
      If selected, notifications for this product will be sent to the{" "}
      <Text component="span" fontWeight="semibold">
        phone number
      </Text>{" "}
      that is configured in your account settings.
    </Text>
  ),
};

export const NotificationMediumsForm = ({
  withContext = true,
  withTooltips = true,
  ...props
}: NotificationMediumsFormProps) => (
  <Form {...props} contentClassName="gap-[12px]">
    <Form.ControlledField
      name="mediums"
      form={props.form}
      descriptionSeparation={12}
      errorSeparation={16}
      label={withContext ? "Mediums" : undefined}
      description={
        withContext
          ? "Select the specific mediums where you would like your notiftions " +
            "about this product to be sent.  At least 1 must be selected."
          : undefined
      }
    >
      {({ value, onChange }) => (
        <MultiCheckbox
          value={value}
          data={[
            {
              value: NotificationMedium.Application,
              label: "Notify me in the application.",
              tooltipDescription: withTooltips
                ? TooltipDescriptions[NotificationMedium.Application]
                : undefined,
            },
            {
              value: NotificationMedium.Email,
              label: "Notify me via email.",
              tooltipDescription: withTooltips
                ? TooltipDescriptions[NotificationMedium.Email]
                : undefined,
            },
            {
              value: NotificationMedium.SMS,
              label: "Notify me via SMS text message.",
              tooltipDescription: withTooltips
                ? TooltipDescriptions[NotificationMedium.SMS]
                : undefined,
            },
          ]}
          onChange={onChange}
        />
      )}
    </Form.ControlledField>
  </Form>
);

export default NotificationMediumsForm;
