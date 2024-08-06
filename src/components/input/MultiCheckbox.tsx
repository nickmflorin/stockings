"use client";
import { useState } from "react";

import { isEqual } from "lodash-es";

import { logger } from "~/internal/logger";

import { classNames, type ComponentProps } from "~/components/types";

import Checkbox from "./Checkbox";

export type MultiCheckboxModel<V extends string = string> = {
  readonly value: V;
  readonly label: string;
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
    <div {...props} className={classNames("flex flex-col gap-4", props.className)}>
      {data.map(({ value: v, label }) => (
        <Checkbox
          key={v}
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
      ))}
    </div>
  );
};
