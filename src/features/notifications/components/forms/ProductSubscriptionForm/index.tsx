import { useFieldArray } from "react-hook-form";

import { PriceChangeEventCondition } from "~/database/model";

import { Link } from "~/components/buttons";
import { Form, type FormProps } from "~/components/forms/Form";
import { MultiCheckbox } from "~/components/input/MultiCheckbox";
import { ButtonFooter } from "~/components/structural/ButtonFooter";

import { type ProductSubscriptionFormValues } from "../hooks";

import { ProductSubscriptionFormSection } from "./ProductSubscriptionFormSection";
import { StatusChangeSubscribedEventFields } from "./StatusChangeSubscribedEventFields";

export interface ProductSubscriptionFormProps
  extends Omit<
    FormProps<ProductSubscriptionFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {
  readonly onCancel?: () => void;
}

export const ProductSubscriptionForm = ({ onCancel, ...props }: ProductSubscriptionFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control: props.form.control,
    name: "statusChange.conditions",
  });

  return (
    <Form
      {...props}
      contentClassName="gap-[12px]"
      footer={<ButtonFooter submitText="Save" orientation="full-width" onCancel={onCancel} />}
    >
      <ProductSubscriptionFormSection
        label="Inventory Change Notifications"
        form={props.form}
        field="statusChange.enabled"
        description="Notify me when the inventory status of a product changes."
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {fields.map((field, index) => (
              <StatusChangeSubscribedEventFields
                key={field.id}
                form={props.form}
                index={index}
                onRemove={() => remove(index)}
              />
            ))}
          </div>
          <div className="flex flex-row items-center justify-end">
            <Link element="button" onClick={() => append({ fromStatus: [], toStatus: [] })}>
              Add Condition
            </Link>
          </div>
        </div>
      </ProductSubscriptionFormSection>
      <ProductSubscriptionFormSection
        label="Price Change Notifications"
        form={props.form}
        field="priceChange.enabled"
        description="Notify me when the price of a product changes."
      >
        <Form.ControlledField
          name="priceChange.conditions"
          form={props.form}
          helpTextSeparation={8}
          helpText={
            "Select the specific price change events that you would like to be notified about. " +
            "At least 1 must be selected."
          }
        >
          {({ value, onChange }) => (
            <MultiCheckbox
              value={value}
              data={[
                { value: PriceChangeEventCondition.PriceDecrease, label: "Price Decrease" },
                { value: PriceChangeEventCondition.PriceIncrease, label: "Price Increase" },
              ]}
              onChange={onChange}
            />
          )}
        </Form.ControlledField>
      </ProductSubscriptionFormSection>
    </Form>
  );
};

export default ProductSubscriptionForm;
