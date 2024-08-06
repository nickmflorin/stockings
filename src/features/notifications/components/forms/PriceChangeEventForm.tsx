"use client";
import { type z } from "zod";

import { PriceChangeEventSchema } from "~/actions/schemas";

import { Form, type FormProps } from "~/components/forms/Form";
import { TextInput } from "~/components/input/TextInput";

export const PriceChangeEventFormSchema = PriceChangeEventSchema.omit({
  product: true,
}).required();

export type PriceChangeEventFormValues = z.infer<typeof PriceChangeEventFormSchema>;

export interface PriceChangeEventFormProps
  extends Omit<
    FormProps<PriceChangeEventFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {}

export const PriceChangeEventForm = (props: PriceChangeEventFormProps): JSX.Element => (
  <Form {...props} contentClassName="gap-[12px]">
    {/* <Form.Field name="name" label="Name" form={props.form}>
      <TextInput className="w-full" {...props.form.register("name")} />
    </Form.Field> */}
  </Form>
);

export default PriceChangeEventForm;
