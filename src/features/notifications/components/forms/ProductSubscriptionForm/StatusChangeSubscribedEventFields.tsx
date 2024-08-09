"use client";
import { useState } from "react";

import { useWatch } from "react-hook-form";

import { type ProductStatus } from "~/database/model";

import { Form, type FormInstance } from "~/components/forms/Form";
/* eslint-disable-next-line max-len */
import { ProductTransitionStatusInput } from "~/features/products/components/input/ProductTransitionStatusInput";

import { type ProductSubscriptionFormValues } from "../hooks";

export interface StatusChangeSubscribedEventFieldsProps {
  readonly form: FormInstance<ProductSubscriptionFormValues>;
  readonly index: number;
}

export const StatusChangeSubscribedEventFields = ({
  form,
  index,
}: StatusChangeSubscribedEventFieldsProps) => {
  const fromStatuses = useWatch({
    control: form.control,
    name: `statusChange.conditions.${index}.fromStatus`,
  });

  const anyFromStatus = useWatch({
    control: form.control,
    name: `statusChange.conditions.${index}.anyFromStatus`,
  });

  const toStatuses = useWatch({
    control: form.control,
    name: `statusChange.conditions.${index}.toStatus`,
  });

  const anyToStatus = useWatch({
    control: form.control,
    name: `statusChange.conditions.${index}.anyToStatus`,
  });

  const [disabledFromStatuses, setDisabledFromStatuses] = useState<ProductStatus[]>(
    !anyToStatus ? toStatuses : [],
  );
  const [disabledToStatuses, setDisabledToStatuses] = useState<ProductStatus[]>(
    !anyFromStatus ? fromStatuses : [],
  );

  return (
    <div className="flex flex-col gap-2">
      <Form.ControlledField
        name={`statusChange.conditions.${index}.fromStatus`}
        label="From"
        form={form}
        description="Notify me when the inventory status of the product changes from this state."
        descriptionSeparation={8}
      >
        {({ value, onChange }) => (
          <ProductTransitionStatusInput
            inPortal
            value={{ anyStatus: anyFromStatus, statuses: value }}
            disabledStatuses={disabledFromStatuses}
            onChange={({ anyStatus, statuses }) => {
              if (anyStatus !== undefined) {
                form.setValue(`statusChange.conditions.${index}.anyFromStatus`, anyStatus);
                setDisabledToStatuses([]);
              } else {
                setDisabledToStatuses(statuses);
                const currToStatuses = form.getValues(`statusChange.conditions.${index}.toStatus`);
                const anyToStatus = form.getValues(`statusChange.conditions.${index}.anyToStatus`);
                if (!anyToStatus) {
                  form.setValue(
                    `statusChange.conditions.${index}.toStatus`,
                    currToStatuses.filter(s => !statuses.includes(s)),
                  );
                }
                onChange(statuses);
              }
            }}
          />
        )}
      </Form.ControlledField>
      <Form.ControlledField
        name={`statusChange.conditions.${index}.toStatus`}
        label="To"
        form={form}
        descriptionSeparation={8}
        description="Notify me when the inventory status of the product changes to this state."
      >
        {({ value, onChange }) => (
          <ProductTransitionStatusInput
            inPortal
            value={{ anyStatus: anyToStatus, statuses: value }}
            disabledStatuses={disabledToStatuses}
            onChange={({ anyStatus, statuses }) => {
              if (anyStatus !== undefined) {
                form.setValue(`statusChange.conditions.${index}.anyToStatus`, anyStatus);
                setDisabledFromStatuses([]);
              } else {
                setDisabledFromStatuses(statuses);
                const currFromStatuses = form.getValues(
                  `statusChange.conditions.${index}.fromStatus`,
                );
                const anyFromStatus = form.getValues(
                  `statusChange.conditions.${index}.anyFromStatus`,
                );
                if (!anyFromStatus) {
                  form.setValue(
                    `statusChange.conditions.${index}.fromStatus`,
                    currFromStatuses.filter(s => !statuses.includes(s)),
                  );
                }
                onChange(statuses);
              }
            }}
          />
        )}
      </Form.ControlledField>
    </div>
  );
};
