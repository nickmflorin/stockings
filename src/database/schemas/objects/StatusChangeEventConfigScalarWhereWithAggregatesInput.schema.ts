/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumNotificationEventConfigContentTypeWithAggregatesFilterObjectSchema } from './EnumNotificationEventConfigContentTypeWithAggregatesFilter.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { EnumProductStatusNullableListFilterObjectSchema } from './EnumProductStatusNullableListFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigScalarWhereWithAggregatesInput>;
export const StatusChangeEventConfigScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => StatusChangeEventConfigScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => StatusChangeEventConfigScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => StatusChangeEventConfigScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), productNotificationConfigId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventConfigContentTypeWithAggregatesFilterObjectSchema),
    z.lazy(() => NotificationEventConfigContentTypeSchema)]).optional(), eventTypes: z.lazy(() => EnumProductStatusNullableListFilterObjectSchema).optional()
}).strict() as SchemaType;
