/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { StatusChangeEventCreateeventTypesInputObjectSchema } from './StatusChangeEventCreateeventTypesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventCreateManyUserInput>;
export const StatusChangeEventCreateManyUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), createdById: z.string(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedById: z.string(), productId: z.string(), contentType: z.lazy(() => NotificationEventContentTypeSchema), eventTypes: z.union([z.lazy(() => StatusChangeEventCreateeventTypesInputObjectSchema),
    z.lazy(() => ProductStatusSchema).array()]).optional()
}).strict() as SchemaType;
