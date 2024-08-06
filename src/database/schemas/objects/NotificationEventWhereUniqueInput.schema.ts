/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereInputObjectSchema } from './NotificationEventWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { EnumNotificationEventContentTypeFilterObjectSchema } from './EnumNotificationEventContentTypeFilter.schema';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventWhereUniqueInput>;
export const NotificationEventWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => NotificationEventWhereInputObjectSchema),
    z.lazy(() => NotificationEventWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => NotificationEventWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => NotificationEventWhereInputObjectSchema),
    z.lazy(() => NotificationEventWhereInputObjectSchema).array()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventContentTypeFilterObjectSchema),
    z.lazy(() => NotificationEventContentTypeSchema)]).optional(), createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), updatedBy: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional(), product: z.union([z.lazy(() => ProductRelationFilterObjectSchema),
    z.lazy(() => ProductWhereInputObjectSchema)]).optional(), user: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
