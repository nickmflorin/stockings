/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigContentTypeSchema } from '../enums/NotificationEventConfigContentType.schema';
import { StatusChangeEventConfigCreateeventTypesInputObjectSchema } from './StatusChangeEventConfigCreateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigCreateManyCreatedByInput>;
export const StatusChangeEventConfigCreateManyCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedById: z.string(), productNotificationConfigId: z.string(), contentType: z.lazy(() => NotificationEventConfigContentTypeSchema), eventTypes: z.union([z.lazy(() => StatusChangeEventConfigCreateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional()
}).strict() as SchemaType;
