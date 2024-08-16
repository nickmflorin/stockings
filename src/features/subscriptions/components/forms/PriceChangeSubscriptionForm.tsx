import { PriceChangeSubscriptionCondition } from "~/database/model";

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
      label="Enabled"
      form={props.form}
      field="enabled"
      description="Notify me when the price of a product changes."
    >
      <Form.ControlledField
        name="conditions"
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
              { value: PriceChangeSubscriptionCondition.PriceDecrease, label: "Price Decrease" },
              { value: PriceChangeSubscriptionCondition.PriceIncrease, label: "Price Increase" },
            ]}
            onChange={onChange}
          />
        )}
      </Form.ControlledField>
    </ProductSubscriptionFormSection>
  </Form>
);

export default PriceChangeSubscriptionForm;
