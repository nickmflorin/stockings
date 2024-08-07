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
import { Title, Description } from "~/components/typography";
import { ProductStatusSelect } from "~/features/products/components/input/ProductStatusSelect";

import {
  useProductNotificationEventsForm,
  type ProductNotificationEventsFormValues,
} from "./hooks";

interface ProductNotificationEventsFormSectionProps {
  readonly label: string;
  readonly form: FormInstance<ProductNotificationEventsFormValues>;
  readonly field: "priceChange.enabled" | "statusChange.enabled";
  readonly children: ReactNode;
  readonly description: string;
}

const ProductNotificationEventsFormSection = ({
  form,
  field,
  children,
  description,
  label,
}: ProductNotificationEventsFormSectionProps) => {
  const enabled = useWatch({ control: form.control, name: field });
  return (
    <div className="flex flex-col gap-2">
      <CheckboxField form={form} name={field} label={label} />
      <Description className="ml-[24px]">{description}</Description>
      <div className={classNames("ml-[24px]", { "pointer-events-none opacity-25": !enabled })}>
        {children}
      </div>
    </div>
  );
};

interface ProductStatusChangeNotificationEventFieldsProps {
  readonly form: FormInstance<ProductNotificationEventsFormValues>;
  readonly index: number;
}

const ProductStatusChangeNotificationEventFields = ({
  form,
  index,
}: ProductStatusChangeNotificationEventFieldsProps) => {
  const fromStatuses = useWatch({
    control: form.control,
    name: `statusChange.events.${index}.fromStatus`,
  });

  return (
    <div className="flex flex-col gap-2">
      <Form.ControlledField
        name={`statusChange.events.${index}.fromStatus`}
        label="From"
        form={form}
        helpText="Notify me when the inventory status of the product changes from this state."
      >
        {({ value, onChange }) => (
          <ProductStatusSelect behavior="multi" value={value} onChange={onChange} />
        )}
      </Form.ControlledField>
      <Form.ControlledField
        name={`statusChange.events.${index}.toStatus`}
        label="To"
        form={form}
        helpText="Notify me when the inventory status of the product changes to this state."
      >
        {({ value, onChange }) => (
          <ProductStatusSelect
            behavior="multi"
            value={value}
            onChange={onChange}
            disabledStatuses={fromStatuses}
          />
        )}
      </Form.ControlledField>
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
        label="Inventory Change Notifications"
        form={form}
        field="statusChange.enabled"
        description="Notify me when the inventory status of a product changes."
      >
        <ProductStatusChangeNotificationEventFields form={form} index={0} />
      </ProductNotificationEventsFormSection>
      <ProductNotificationEventsFormSection
        label="Price Change Notifications"
        form={form}
        field="priceChange.enabled"
        description="Notify me when the price of a product changes."
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
