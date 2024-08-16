"use client";
import { useRef } from "react";

import { type SubscriptionType } from "~/database/model";

import { IconButton } from "~/components/buttons";
import type { SelectInstance } from "~/components/input/select";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";
/* eslint-disable-next-line max-len */
import { SubscriptionTypeSelect } from "~/features/subscriptions/components/input/SubscriptionTypeSelect";
import {
  SubscriptionsTableFiltersOptions,
  SubscriptionsTableFiltersSchemas,
} from "~/features/subscriptions/types";
import { useFilters } from "~/hooks/use-filters";

export interface SubscriptionsTableFilterBarProps extends ComponentProps {}

export const SubscriptionsTableFilterBar = (
  props: SubscriptionsTableFilterBarProps,
): JSX.Element => {
  const stateSelectRef = useRef<SelectInstance | null>(null);
  const typeSelectRef = useRef<SelectInstance | null>(null);

  const [filters, updateFilters] = useFilters({
    schemas: SubscriptionsTableFiltersSchemas,
    options: SubscriptionsTableFiltersOptions,
  });

  return (
    <div className={classNames("flex flex-row items-center gap-2", props.className)}>
      <SubscriptionTypeSelect
        ref={typeSelectRef}
        dynamicHeight={false}
        placeholder="Types"
        behavior="multi"
        inputClassName="max-w-[320px]"
        initialValue={filters.types}
        onChange={(types: SubscriptionType[]) => updateFilters({ types })}
        onClear={() => updateFilters({ types: [] })}
      />
      <IconButton.Transparent
        icon="xmark"
        radius="full"
        element="button"
        className="text-gray-400 h-full aspect-square w-auto p-[4px] hover:text-gray-500"
        onClick={() => {
          for (const r of [typeSelectRef, stateSelectRef]) {
            r.current?.clear();
          }
        }}
      />
    </div>
  );
};
