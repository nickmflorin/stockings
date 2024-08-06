/* eslint-disable */
import { z } from 'zod';
import { NotificationEventContentTypeSchema } from '../enums/NotificationEventContentType.schema';
import { PriceChangeEventCCreateeventTypesInputObjectSchema } from './PriceChangeEventCCreateeventTypesInput.schema';
import { PriceChangeEventTypeSchema } from '../enums/PriceChangeEventType.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCCreateManyCreatedByInput>;
export const PriceChangeEventCCreateManyCreatedByInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedById: z.string(), productId: z.string(), userId: z.string(), contentType: z.lazy(() => NotificationEventContentTypeSchema), eventTypes: z.union([z.lazy(() => PriceChangeEventCCreateeventTypesInputObjectSchema),
    z.lazy(() => PriceChangeEventTypeSchema).array()]).optional()
}).strict() as SchemaType;
