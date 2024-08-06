/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumNotificationEventContentTypeFilterObjectSchema } from './EnumNotificationEventContentTypeFilter.schema';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { EnumProductStatusNullableListFilterObjectSchema } from './EnumProductStatusNullableListFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventScalarWhereInput>;
export const StatusChangeEventScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventContentTypeFilterObjectSchema),
    z.lazy(() => NotificationEventContentTypeSchema)]).optional(), eventTypes: z.lazy(() => EnumProductStatusNullableListFilterObjectSchema).optional()
}).strict() as SchemaType;
