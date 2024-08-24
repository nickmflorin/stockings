"use client";
import { useState, type ReactNode } from "react";

import { isEqual } from "lodash-es";

import { logger } from "~/internal/logger";

import Tooltip from "~/components/floating/Tooltip";
import Icon from "~/components/icons/Icon";
import { classNames, type ComponentProps } from "~/components/types";

import Checkbox from "./Checkbox";

export type MultiCheckboxModel<V extends string = string> = {
  readonly value: V;
  readonly label: string;
  readonly tooltipDescription?: ReactNode;
};

export interface MultiCheckboxProps<V extends string = string> extends ComponentProps {
  readonly data: MultiCheckboxModel<V>[];
  readonly initialValue?: V[];
  readonly value?: V[];
  readonly onChange?: (v: V[]) => void;
}

export const MultiCheckbox = <V extends string>({
  data,
  value: propValue,
  initialValue,
  onChange,
  ...props
}: MultiCheckboxProps<V>): JSX.Element => {
  const [_value, setValue] = useState<V[]>(initialValue ?? ([] as V[]));
  const value = propValue ?? _value;

  return (
    <div {...props} className={classNames("flex flex-col gap-6", props.className)}>
      {data.map(({ value: v, label, tooltipDescription }) => (
        <div className="flex flex-row items-center gap-4" key={v}>
          <Checkbox
            value={value.includes(v)}
            label={label}
            onChange={e => {
              if (e.target.checked) {
                setValue(curr => {
                  const filtered = curr.filter(val => isEqual(val, v));
                  if (filtered.length === 0) {
                    return [...curr, v];
                  }
                  logger.warn(`Inconsistent State: Value '${v}' is already in the checked state!`);
                  return curr;
                });
                if (propValue !== undefined) {
                  const filtered = propValue.filter(val => isEqual(val, v));
                  if (filtered.length === 0) {
                    return onChange?.([...propValue, v]);
                  }
                  logger.warn(`Inconsistent State: Value '${v}' is already in the checked value!`);
                }
              } else {
                setValue(curr => {
                  const filtered = curr.filter(val => isEqual(val, v));
                  if (filtered.length !== 0) {
                    return curr.filter(val => !isEqual(val, v));
                  }
                  logger.warn(`Inconsistent State: Value '${v}' is not in the checked state!`);
                  return curr;
                });
                if (propValue !== undefined) {
                  const filtered = propValue.filter(val => isEqual(val, v));
                  if (filtered.length !== 0) {
                    return onChange?.(propValue.filter(val => !isEqual(val, v)));
                  }
                  logger.warn(`Inconsistent State: Value '${v}' is not in the checked value!`);
                }
              }
            }}
          />
          {tooltipDescription && (
            <Tooltip
              content={tooltipDescription}
              inPortal
              className="max-w-[200px]"
              placement="bottom-end"
            >
              <Icon icon="info-circle" size="18px" className="text-gray-600" />
            </Tooltip>
          )}
        </div>
      ))}
    </div>
  );
};
