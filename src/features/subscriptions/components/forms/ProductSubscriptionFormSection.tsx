import { type ReactNode } from "react";

import { useWatch, type Path } from "react-hook-form";

import { CheckboxField } from "~/components/forms/fields/CheckboxField";
import { type FormInstance } from "~/components/forms/Form";
import { Description } from "~/components/typography";
import { Disabled } from "~/components/util";

import {
  type StatusChangeSubscriptionFormValues,
  type PriceChangeSubscriptionFormValues,
} from "./hooks";

export interface ProductSubscriptionFormSectionProps<
  V extends StatusChangeSubscriptionFormValues | PriceChangeSubscriptionFormValues,
> {
  readonly label: string;
  readonly form: FormInstance<V>;
  readonly field: Path<V>;
  readonly children: ReactNode;
  readonly description: string;
}

export const ProductSubscriptionFormSection = <
  V extends StatusChangeSubscriptionFormValues | PriceChangeSubscriptionFormValues,
>({
  form,
  field,
  children,
  description,
  label,
}: ProductSubscriptionFormSectionProps<V>) => {
  const enabled = useWatch({ control: form.control, name: field });
  return (
    <div className="flex flex-col gap-2">
      <CheckboxField form={form} name={field} label={label} />
      <Description fontSize="xs" className="ml-[24px] text-gray-500">
        {description}
      </Description>
      <Disabled isDisabled={!enabled} className="ml-[24px]">
        {children}
      </Disabled>
    </div>
  );
};
