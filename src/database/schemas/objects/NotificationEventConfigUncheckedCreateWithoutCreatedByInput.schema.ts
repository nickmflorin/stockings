/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigUncheckedCreateWithoutCreatedByInput>;
export const NotificationEventConfigUncheckedCreateWithoutCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedById: z.string(), productNotificationConfigId: z.string(), contentType: z.lazy(() => NotificationEventConfigContentTypeSchema)
}).strict() as SchemaType;
