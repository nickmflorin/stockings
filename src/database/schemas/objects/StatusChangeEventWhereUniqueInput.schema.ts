/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereInputObjectSchema } from './StatusChangeEventWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { EnumNotificationEventContentTypeFilterObjectSchema } from './EnumNotificationEventContentTypeFilter.schema';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { EnumProductStatusNullableListFilterObjectSchema } from './EnumProductStatusNullableListFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventWhereUniqueInput>;
export const StatusChangeEventWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => StatusChangeEventWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => StatusChangeEventWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => StatusChangeEventWhereInputObjectSchema),
    z.lazy(() => StatusChangeEventWhereInputObjectSchema).array()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventContentTypeFilterObjectSchema),
    z.lazy(() => NotificationEventContentTypeSchema)]).optional(), eventTypes: z.lazy(() => EnumProductStatusNullableListFilterObjectSchema).optional(), createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), updatedBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), product: z.union([z.lazy(() => ProductRelationFilterObjectSchema),
    z.lazy(() => ProductWhereInputObjectSchema)]).optional(), user: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
