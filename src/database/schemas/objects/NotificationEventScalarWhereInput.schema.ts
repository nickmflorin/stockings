/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumNotificationEventContentTypeFilterObjectSchema } from './EnumNotificationEventContentTypeFilter.schema';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventScalarWhereInput>;
export const NotificationEventScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => NotificationEventScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => NotificationEventScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => NotificationEventScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventContentTypeFilterObjectSchema),
    z.lazy(() => NotificationEventContentTypeSchema)]).optional()
}).strict() as SchemaType;
