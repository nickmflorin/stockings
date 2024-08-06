/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumNotificationEventContentTypeWithAggregatesFilterObjectSchema } from './EnumNotificationEventContentTypeWithAggregatesFilter.schema';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { EnumProductStatusNullableListFilterObjectSchema } from './EnumProductStatusNullableListFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventScalarWhereWithAggregatesInput>;
export const StatusChangeEventScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => StatusChangeEventScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => StatusChangeEventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => StatusChangeEventScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => StatusChangeEventScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => StatusChangeEventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventContentTypeWithAggregatesFilterObjectSchema),
    z.lazy(() => NotificationEventContentTypeSchema)]).optional(), eventTypes: z.lazy(() => EnumProductStatusNullableListFilterObjectSchema).optional()
}).strict() as SchemaType;
