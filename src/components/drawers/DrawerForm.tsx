"use client";
import clsx from "clsx";
import { useWatch } from "react-hook-form";
import { type PickByValueExact } from "utility-types";

import type { BaseFormValues, FormInstance, FieldName } from "~/components/forms/generic";
import { Title } from "~/components/typography/Title";

import { Drawer } from "./Drawer";
import { DrawerContent } from "./DrawerContent";
import { DrawerHeader } from "./DrawerHeader";

interface DrawerFormProps<I extends BaseFormValues> {
  readonly form: FormInstance<I>;
  readonly titleField: keyof PickByValueExact<I, string> & FieldName<I>;
  readonly titlePlaceholder?: string;
  readonly eagerTitle?: string;
  readonly children: JSX.Element;
}

export const DrawerForm = <I extends BaseFormValues>({
  form,
  titleField,
  children,
  eagerTitle,
  titlePlaceholder,
}: DrawerFormProps<I>): JSX.Element => {
  const _titleValue = useWatch({ control: form.control, name: titleField });
  const titleValue = typeof _titleValue === "string" ? _titleValue : "";

  return (
    <Drawer>
      <DrawerHeader>
        {titleValue.trim().length === 0 && (eagerTitle || titlePlaceholder) ? (
          <Title order={4} className={clsx({ "text-gray-300": titlePlaceholder !== undefined })}>
            {titlePlaceholder ?? eagerTitle}
          </Title>
        ) : (
          <Title order={4}>{titleValue}</Title>
        )}
      </DrawerHeader>
      <DrawerContent className="overflow-y-hidden">{children}</DrawerContent>
    </Drawer>
  );
};

export default DrawerForm;
