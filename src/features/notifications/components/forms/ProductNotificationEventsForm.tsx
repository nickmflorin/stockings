"use client";
import { useRouter } from "next/navigation";
import { useTransition, type ReactNode } from "react";

import { useWatch } from "react-hook-form";

import { PriceChangeEventType } from "~/database/model";

import { CheckboxField } from "~/components/forms/fields/CheckboxField";
import { Form, type FormInstance, type FormProps } from "~/components/forms/Form";
import { MultiCheckbox } from "~/components/input/MultiCheckbox";
import { ButtonFooter } from "~/components/structural/ButtonFooter";
import { classNames } from "~/components/types";

import {
  useProductNotificationEventsForm,
  type ProductNotificationEventsFormValues,
} from "./hooks";

interface ProductNotificationEventsFormSectionProps {
  readonly label: string;
  readonly form: FormInstance<ProductNotificationEventsFormValues>;
  readonly field: "priceChange.enabled" | "statusChange.enabled";
  readonly children: ReactNode;
}

const ProductNotificationEventsFormSection = ({
  form,
  field,
  children,
  label,
}: ProductNotificationEventsFormSectionProps) => {
  const enabled = useWatch({ control: form.control, name: field });
  return (
    <div className="flex flex-col gap-4">
      <CheckboxField form={form} name={field} label={label} />
      <div className={classNames({ "pointer-events-none opacity-25": !enabled })}>{children}</div>
    </div>
  );
};

export interface ProductNotificationEventsFormProps
  extends Omit<
    FormProps<ProductNotificationEventsFormValues>,
    "children" | "onSubmit" | "contentClassName" | "form"
  > {
  readonly onSuccess?: () => void;
  readonly onCancel?: () => void;
}

export const ProductNotificationEventsForm = ({
  onCancel,
  onSuccess,
  ...props
}: ProductNotificationEventsFormProps) => {
  const { refresh } = useRouter();
  const [pending, transition] = useTransition();

  const form = useProductNotificationEventsForm();

  return (
    <Form
      {...props}
      form={form}
      onError={e => console.log(e)}
      contentClassName="gap-[12px]"
      footer={<ButtonFooter submitText="Save" onCancel={onCancel} />}
      isLoading={pending}
      action={async (data, form) => {
        console.log(data);
        transition(() => {
          refresh();
        });
      }}
    >
      <ProductNotificationEventsFormSection
        label="Enable Status Change Notifications"
        form={form}
        field="statusChange.enabled"
      >
        <div>Test</div>
      </ProductNotificationEventsFormSection>
      <ProductNotificationEventsFormSection
        label="Enable Price Change Notifications"
        form={form}
        field="priceChange.enabled"
      >
        <Form.ControlledField
          name="priceChange.events"
          label="Events"
          form={form}
          labelBottomMargin={8}
          helpTextTopMargin={8}
          helpText={
            "Select the specific price change events that you would like to be notified about. " +
            "At least 1 must be selected."
          }
        >
          {({ value, onChange }) => (
            <MultiCheckbox
              value={value}
              data={[
                { value: PriceChangeEventType.PriceDecrease, label: "Price Decrease" },
                { value: PriceChangeEventType.PriceIncrease, label: "Price Increase" },
              ]}
              onChange={onChange}
            />
          )}
        </Form.ControlledField>
      </ProductNotificationEventsFormSection>
    </Form>
  );
};

export default ProductNotificationEventsForm;
