import { PriceChangeCondition } from "~/database/model";

import { Form, type FormProps } from "~/components/forms/Form";
import { MultiCheckbox } from "~/components/input/MultiCheckbox";
import { ButtonFooter } from "~/components/structural/ButtonFooter";

import { type PriceChangeSubscriptionFormValues } from "./hooks";
import { ProductSubscriptionFormSection } from "./ProductSubscriptionFormSection";

export interface PriceChangeSubscriptionFormProps
  extends Omit<
    FormProps<PriceChangeSubscriptionFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {
  readonly onCancel?: () => void;
}

export const PriceChangeSubscriptionForm = ({
  onCancel,
  ...props
}: PriceChangeSubscriptionFormProps) => (
  <Form
    {...props}
    contentClassName="gap-[12px]"
    footer={<ButtonFooter submitText="Save" orientation="full-width" onCancel={onCancel} />}
  >
    <ProductSubscriptionFormSection
      label="Enable Price Change Notifications"
      form={props.form}
      field="enabled"
    >
      <Form.ControlledField
        name="conditions"
        form={props.form}
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
              { value: PriceChangeCondition.PriceDecrease, label: "Price Decrease" },
              { value: PriceChangeCondition.PriceIncrease, label: "Price Increase" },
            ]}
            onChange={onChange}
          />
        )}
      </Form.ControlledField>
    </ProductSubscriptionFormSection>
  </Form>
);

export default PriceChangeSubscriptionForm;
