import { useFieldArray } from "react-hook-form";

import { Link } from "~/components/buttons";
import { Form, type FormProps } from "~/components/forms/Form";
import { ButtonFooter } from "~/components/structural/ButtonFooter";

import { type StatusChangeSubscriptionFormValues } from "../hooks";
import { ProductSubscriptionFormSection } from "../ProductSubscriptionFormSection";

import { StatusChangeSubscriptionConditionFields } from "./StatusChangeSubscriptionConditionFields";

export interface StatusChangeSubscriptionFormProps
  extends Omit<
    FormProps<StatusChangeSubscriptionFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {
  readonly onCancel?: () => void;
}

export const StatusChangeSubscriptionForm = ({
  onCancel,
  ...props
}: StatusChangeSubscriptionFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control: props.form.control,
    name: "conditions",
  });

  return (
    <Form
      {...props}
      contentClassName="gap-[12px]"
      footer={<ButtonFooter submitText="Save" orientation="full-width" onCancel={onCancel} />}
    >
      <ProductSubscriptionFormSection
        label="Enabled"
        form={props.form}
        field="enabled"
        description="Notify me when the inventory status of a product changes."
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
      </ProductSubscriptionFormSection>
    </Form>
  );
};

export default StatusChangeSubscriptionForm;
