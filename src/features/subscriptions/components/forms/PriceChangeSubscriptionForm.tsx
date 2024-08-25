import { PriceChangeCondition } from "~/database/model";

import { Form, type FormProps } from "~/components/forms/Form";
import { MultiCheckbox } from "~/components/input/MultiCheckbox";

import { type PriceChangeSubscriptionFormValues } from "./hooks";
import { ProductSubscriptionFormSection } from "./ProductSubscriptionFormSection";

export interface PriceChangeSubscriptionFormProps
  extends Omit<
    FormProps<PriceChangeSubscriptionFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {
  readonly excludeEnableToggle?: boolean;
  readonly withContext?: boolean;
}

export const PriceChangeSubscriptionForm = ({
  excludeEnableToggle,
  withContext,
  ...props
}: PriceChangeSubscriptionFormProps) => (
  <Form {...props} contentClassName="gap-[12px]">
    <ProductSubscriptionFormSection
      label="Enable Price Change Notifications"
      form={props.form}
      field="enabled"
      excludeEnableToggle={excludeEnableToggle}
    >
      <Form.ControlledField
        name="conditions"
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
