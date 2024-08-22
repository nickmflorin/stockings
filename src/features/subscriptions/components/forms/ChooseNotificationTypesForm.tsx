import { z } from "zod";

import { NotificationType } from "~/database/model";

import { Form, type FormProps } from "~/components/forms/Form";
import { useForm } from "~/components/forms/hooks";
import { MultiCheckbox } from "~/components/input/MultiCheckbox";

const ChooseNotificationTypesSchema = z.object({
  notificationTypes: z
    .array(
      z.union([
        z.literal(NotificationType.PriceChangeNotification),
        z.literal(NotificationType.PriceChangeNotification),
      ]),
    )
    .min(1, "At least one notification type must be selected."),
});

type ChooseNotificationTypesFormValues = z.infer<typeof ChooseNotificationTypesSchema>;

export interface ChooseNotificationTypesFormProps
  extends Omit<
    FormProps<ChooseNotificationTypesFormValues>,
    "children" | "onSubmit" | "contentClassName" | "form"
  > {}

export const ChooseNotificationTypesForm = (props: ChooseNotificationTypesFormProps) => {
  const form = useForm({
    schema: ChooseNotificationTypesSchema,
    defaultValues: {
      notificationTypes: [],
    },
  });
  return (
    <Form {...props} contentClassName="gap-[12px]" form={form}>
      <Form.ControlledField
        name="notificationTypes"
        form={form}
        descriptionSeparation={12}
        label="Conditions"
        description={
          "Select the specific price change conditions that you would like to be notified about " +
          "for this product. At least 1 must be selected."
        }
      >
        {({ value, onChange }) => (
          <MultiCheckbox
            value={value}
            data={[
              { value: NotificationType.PriceChangeNotification, label: "Price Changes" },
              { value: NotificationType.StatusChangeNotification, label: "Status Changes" },
            ]}
            onChange={onChange}
          />
        )}
      </Form.ControlledField>
    </Form>
  );
};

export default ChooseNotificationTypesForm;
