"use client";
import { useRef } from "react";

import { type NotificationType, type NotificationState } from "~/database/model";

import { IconButton } from "~/components/buttons";
import type { SelectInstance } from "~/components/input/select";
import type { ComponentProps } from "~/components/types";
import { classNames } from "~/components/types";
/* eslint-disable-next-line max-len */
import { NotificationStateSelect } from "~/features/notifications/components/input/NotificationStateSelect";
/* eslint-disable-next-line max-len */
import { NotificationTypeSelect } from "~/features/notifications/components/input/NotificationTypeSelect";
import {
  NotificationsTableFiltersOptions,
  NotificationsTableFiltersSchemas,
} from "~/features/notifications/types";
import { useFilters } from "~/hooks/use-filters";

export interface NotificationsTableFilterBarProps extends ComponentProps {}

export const NotificationsTableFilterBar = (
  props: NotificationsTableFilterBarProps,
): JSX.Element => {
  const stateSelectRef = useRef<SelectInstance | null>(null);
  const typeSelectRef = useRef<SelectInstance | null>(null);

  const [filters, updateFilters] = useFilters({
    schemas: NotificationsTableFiltersSchemas,
    options: NotificationsTableFiltersOptions,
  });

  return (
    <div className={classNames("flex flex-row items-center gap-2", props.className)}>
      <NotificationStateSelect
        ref={stateSelectRef}
        dynamicHeight={false}
        placeholder="States"
        behavior="multi"
        inputClassName="max-w-[260px]"
        initialValue={filters.states}
        onChange={(states: NotificationState[]) => updateFilters({ states })}
        onClear={() => updateFilters({ states: [] })}
      />
      <NotificationTypeSelect
        ref={typeSelectRef}
        dynamicHeight={false}
        placeholder="Types"
        behavior="multi"
        inputClassName="max-w-[320px]"
        initialValue={filters.types}
        onChange={(types: NotificationType[]) => updateFilters({ types })}
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
