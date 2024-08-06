/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { StatusChangeEventCreateeventTypesInputObjectSchema } from './StatusChangeEventCreateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateManyUpdatedByInput>;
export const StatusChangeEventCreateManyUpdatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdById: z.string(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), productId: z.string(), userId: z.string(), contentType: z.lazy(() => NotificationEventContentTypeSchema), eventTypes: z.union([z.lazy(() => StatusChangeEventCreateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional()
}).strict() as SchemaType;
