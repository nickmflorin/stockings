"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { createProductNotification } from "~/actions/mutations/products";

import { ButtonFooter } from "~/components/structural/ButtonFooter";

import { useProductNotificationForm } from "./hooks";
import {
  ProductNotificationForm,
  type ProductNotificationFormProps,
} from "./ProductNotificationForm";

export interface CreateProductNotificationFormProps
  extends Omit<ProductNotificationFormProps, "action" | "form"> {
  readonly onSuccess?: (m: any) => void;
  readonly onCancel?: () => void;
}

export const CreateProductNotificationForm = ({
  onCancel,
  onSuccess,
  ...props
}: CreateProductNotificationFormProps): JSX.Element => {
  const { refresh } = useRouter();
  const [pending, transition] = useTransition();
  const form = useProductNotificationForm();

  return (
    <ProductNotificationForm
      {...props}
      form={form}
      footer={<ButtonFooter submitText="Save" onCancel={onCancel} />}
      isLoading={pending}
      action={async (data, form) => {
        const response = await createProductNotification(data);
        console.log(response);
      }}
    />
  );
};

export default CreateProductNotificationForm;
