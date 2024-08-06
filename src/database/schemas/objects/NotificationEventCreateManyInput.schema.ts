/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateManyInput>;
export const NotificationEventCreateManyInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdById: z.string(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedById: z.string(), productId: z.string(), userId: z.string(), contentType: z.lazy(() => NotificationEventContentTypeSchema)
}).strict() as SchemaType;
