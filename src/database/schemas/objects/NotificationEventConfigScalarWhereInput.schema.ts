/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumNotificationEventConfigContentTypeFilterObjectSchema } from './EnumNotificationEventConfigContentTypeFilter.schema';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigScalarWhereInput>;
export const NotificationEventConfigScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema),
    z.lazy(() => NotificationEventConfigScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), productNotificationConfigId: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), contentType: z.union([z.lazy(() => EnumNotificationEventConfigContentTypeFilterObjectSchema),
    z.lazy(() => NotificationEventConfigContentTypeSchema)]).optional()
}).strict() as SchemaType;
