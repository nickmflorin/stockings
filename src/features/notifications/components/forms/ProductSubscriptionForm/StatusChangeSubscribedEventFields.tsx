import { useState } from "react";

import { useWatch } from "react-hook-form";

import { type ProductStatus } from "~/database/model";

import { withOrdinalIndicator } from "~/lib/formatters";

import { IconButton } from "~/components/buttons";
import { Form, type FormInstance } from "~/components/forms/Form";
import { CircleNumber } from "~/components/icons/CircleNumber";
import { Collapse } from "~/components/structural/Collapse";
import { Label } from "~/components/typography";
/* eslint-disable-next-line max-len */
import { ProductTransitionStatusInput } from "~/features/products/components/input/ProductTransitionStatusInput";

import { type ProductSubscriptionFormValues } from "../hooks";

export interface StatusChangeSubscribedEventFieldsProps {
  readonly form: FormInstance<ProductSubscriptionFormValues>;
  readonly index: number;
  readonly onRemove: () => void;
}

export const StatusChangeSubscribedEventFields = ({
  form,
  index,
  onRemove,
}: StatusChangeSubscribedEventFieldsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const fromStatuses = useWatch({
    control: form.control,
    name: `statusChange.conditions.${index}.fromStatus`,
  });

  const toStatuses = useWatch({
    control: form.control,
    name: `statusChange.conditions.${index}.toStatus`,
  });

  const [disabledFromStatuses, setDisabledFromStatuses] = useState<ProductStatus[]>(() => {
    if (toStatuses.length === 1) {
      return toStatuses;
    }
    return [];
  });

  const [disabledToStatuses, setDisabledToStatuses] = useState<ProductStatus[]>(() => {
    if (fromStatuses.length === 1) {
      return fromStatuses;
    }
    return [];
  });

  return (
    <Collapse
      isOpen={isOpen}
      contentClassName="pl-9 mt-2"
      actions={
        index !== 0
          ? [
              <IconButton.Transparent
                key="0"
                icon="trash-alt"
                className="text-red-600 hover:text-red-700 hover:bg-transparent"
                onClick={() => onRemove()}
              />,
            ]
          : undefined
      }
      title={
        <div className="flex flex-row items-center gap-2">
          <CircleNumber fontSize="xs" size="24px">
            {index + 1}
          </CircleNumber>
          <Label>{`${withOrdinalIndicator(index + 1)} Condition`}</Label>
        </div>
      }
      onOpenChange={o => setIsOpen(o)}
    >
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
              value={value}
              disabledStatuses={disabledFromStatuses}
              onChange={v => {
                onChange(v);
                if (v.length === 1) {
                  const currToStatuses = form.getValues(
                    `statusChange.conditions.${index}.toStatus`,
                  );
                  setDisabledToStatuses(v);
                  form.setValue(
                    `statusChange.conditions.${index}.toStatus`,
                    currToStatuses.filter(s => !v.includes(s)),
                  );
                } else {
                  setDisabledToStatuses([]);
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
              value={value}
              disabledStatuses={disabledToStatuses}
              onChange={v => {
                onChange(v);
                if (v.length === 1) {
                  const currFromStatuses = form.getValues(
                    `statusChange.conditions.${index}.fromStatus`,
                  );
                  setDisabledFromStatuses(v);
                  form.setValue(
                    `statusChange.conditions.${index}.fromStatus`,
                    currFromStatuses.filter(s => !v.includes(s)),
                  );
                } else {
                  setDisabledFromStatuses([]);
                }
              }}
            />
          )}
        </Form.ControlledField>
      </div>
    </Collapse>
  );
};
