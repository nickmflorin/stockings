"use client";
import { type z } from "zod";

import { StatusChangeEventSchema } from "~/actions/schemas";

import { Form, type FormProps } from "~/components/forms/Form";
import { TextInput } from "~/components/input/TextInput";

export const StatusChangeEventFormSchema = StatusChangeEventSchema.omit({
  product: true,
}).required();

export type StatusChangeEventFormValues = z.infer<typeof StatusChangeEventFormSchema>;

export interface StatusChangeEventFormProps
  extends Omit<
    FormProps<StatusChangeEventFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {}

export const StatusChangeEventForm = (props: StatusChangeEventFormProps): JSX.Element => (
  <Form {...props} contentClassName="gap-[12px]">
    {/* <Form.Field name="name" label="Name" form={props.form}>
      <TextInput className="w-full" {...props.form.register("name")} />
    </Form.Field> */}
  </Form>
);

export default StatusChangeEventForm;
