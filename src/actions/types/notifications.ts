import { z } from "zod";

import {
  type NotificationState,
  type NotificationType,
  NotificationStates,
  NotificationTypes,
} from "~/database/model";

import type { ParseFiltersOptions } from "~/lib/filters";

export interface NotificationsFilters {
  readonly states: NotificationState[];
  readonly types: NotificationType[];
}

export interface NotificationsControls {
  readonly filters: NotificationsFilters;
  // readonly ordering: Ordering<OrderableNotificationsColumnId>;
  readonly page: number;
}

export const NotificationsFiltersSchemas = {
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
  [key in keyof NotificationsFilters]: z.ZodType;
};

export const NotificationsFiltersOptions: ParseFiltersOptions<typeof NotificationsFiltersSchemas> =
  {
    types: { defaultValue: [], excludeWhen: v => v.length === 0 },
    states: { defaultValue: [], excludeWhen: v => v.length === 0 },
  };
