/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumNotificationEventConfigContentTypeFilterObjectSchema } from './EnumNotificationEventConfigContentTypeFilter.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { EnumProductStatusNullableListFilterObjectSchema } from './EnumProductStatusNullableListFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProductNotificationConfigRelationFilterObjectSchema } from './ProductNotificationConfigRelationFilter.schema';
import { ProductNotificationConfigWhereInputObjectSchema } from './ProductNotificationConfigWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigWhereInput>;
export const StatusChangeEventConfigWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => StatusChangeEventConfigWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => StatusChangeEventConfigWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => StatusChangeEventConfigWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventConfigWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productNotificationConfigId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventConfigContentTypeFilterObjectSchema),
    z.lazy(() => NotificationEventConfigContentTypeSchema)]).optional(), eventTypes: z.lazy(() => EnumProductStatusNullableListFilterObjectSchema).optional(), createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), updatedBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), productNotificationConfig: z.union([z.lazy(() => ProductNotificationConfigRelationFilterObjectSchema),
    z.lazy(() => ProductNotificationConfigWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
