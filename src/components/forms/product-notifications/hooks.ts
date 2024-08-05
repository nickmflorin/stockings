import { ProductNotificationSchema } from "~/actions/schemas";

import { useForm } from "~/components/forms/hooks";

export const useProductNotificationForm = () =>
  useForm({
    schema: ProductNotificationSchema.required(),
    defaultValues: {
      name: "",
    },
  });
