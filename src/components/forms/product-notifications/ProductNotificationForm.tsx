"use client";
import { type z } from "zod";

import { ProductNotificationSchema } from "~/actions/schemas";

import { TextInput } from "~/components/input/TextInput";

import { Form, type FormProps } from "../generic/Form";

export const SchoolFormSchema = ProductNotificationSchema.required();

export type ProductionNotificationFormValues = z.infer<typeof SchoolFormSchema>;

export interface ProductNotificationFormProps
  extends Omit<
    FormProps<ProductionNotificationFormValues>,
    "children" | "onSubmit" | "contentClassName"
  > {}

export const ProductNotificationForm = (props: ProductNotificationFormProps): JSX.Element => (
  <Form {...props} contentClassName="gap-[12px]">
    <Form.Field name="name" label="Name" form={props.form}>
      <TextInput className="w-full" {...props.form.register("name")} />
    </Form.Field>
  </Form>
);

export default ProductNotificationForm;
