import { z } from "zod";

import {
  type Notification,
  type NotificationState,
  type NotificationType,
  NotificationStates,
  NotificationTypes,
} from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";
import { Ordering } from "~/lib/ordering";

import type { DataTableColumnConfig } from "~/components/tables";

export const NotificationsTableColumns = [
  {
    id: "type",
    label: "Type",
    minWidth: 240,
    maxWidth: 240,
  },
  {
    id: "state",
    label: "State",
    minWidth: 240,
    maxWidth: 240,
  },
] as const satisfies DataTableColumnConfig<Notification, string>[];

export type NotificationsTableColumnId = (typeof NotificationsTableColumns)[number]["id"];

export type OrderableNotificationsTableColumnId = Extract<
  (typeof NotificationsTableColumns)[number],
  { isOrderable: true }
>["id"];

export interface NotificationsTableFilters {
  readonly states: NotificationState[];
  readonly types: NotificationType[];
}

export interface NotificationsTableControls {
  readonly filters: NotificationsTableFilters;
  // readonly ordering: TableOrdering<OrderableNotificationsTableColumnId>;
  readonly page: number;
}

export const NotificationsTableFiltersSchemas = {
  states: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return NotificationStates.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (NotificationStates.contains(curr) ? [...prev, curr] : prev),
      [] as NotificationState[],
    );
  }),
  types: z.union([z.string(), z.array(z.string())]).transform(value => {
    if (typeof value === "string") {
      return NotificationTypes.contains(value) ? [value] : [];
    }
    return value.reduce(
      (prev, curr) => (NotificationTypes.contains(curr) ? [...prev, curr] : prev),
      [] as NotificationType[],
    );
  }),
} satisfies {
  [key in keyof NotificationsTableFilters]: z.ZodType;
};

export const NotificationsTableFiltersOptions: ParseFiltersOptions<
  typeof NotificationsTableFiltersSchemas
> = {
  types: { defaultValue: [], excludeWhen: v => v.length === 0 },
  states: { defaultValue: [], excludeWhen: v => v.length === 0 },
};
