import { useFieldArray } from "react-hook-form";

import { Link } from "~/components/buttons";
import { Form, type FormProps } from "~/components/forms/Form";

import { type StatusChangeSubscriptionFormValues } from "../hooks";
import { ProductSubscriptionFormSection } from "../ProductSubscriptionFormSection";

import { StatusChangeSubscriptionConditionFields } from "./StatusChangeSubscriptionConditionFields";

export interface StatusChangeSubscriptionFormProps
  extends Omit<
    FormProps<StatusChangeSubscriptionFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {
  readonly excludeEnableToggle?: boolean;
  readonly withContext?: boolean;
}

export const StatusChangeSubscriptionForm = ({
  excludeEnableToggle,
  withContext = true,
  ...props
}: StatusChangeSubscriptionFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control: props.form.control,
    name: "conditions",
  });

  return (
    <Form {...props} contentClassName="gap-[12px]">
      <ProductSubscriptionFormSection
        label="Enable Status Change Notifications"
        form={props.form}
        field="enabled"
        excludeEnableToggle={excludeEnableToggle}
      >
        <Form.GenericField
          descriptionSeparation={12}
          label={withContext ? "Conditions" : undefined}
          description={
            withContext
              ? "Select the specific status change conditions that you would like to be " +
                "notified about for this product. At least 1 must be selected."
              : undefined
          }
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {fields.map((field, index) => (
                <StatusChangeSubscriptionConditionFields
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
        </Form.GenericField>
      </ProductSubscriptionFormSection>
    </Form>
  );
};

export default StatusChangeSubscriptionForm;
