/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateManyUpdatedByInput>;
export const NotificationEventConfigCreateManyUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdById: z.string(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), productNotificationConfigId: z.string(), contentType: z.lazy(() => NotificationEventConfigContentTypeSchema)
}).strict() as SchemaType;
