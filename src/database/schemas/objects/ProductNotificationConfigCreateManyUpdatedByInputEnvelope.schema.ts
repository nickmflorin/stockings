/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateManyUpdatedByInputObjectSchema } from './ProductNotificationConfigCreateManyUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateManyUpdatedByInputEnvelope>;
export const ProductNotificationConfigCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductNotificationConfigCreateManyUpdatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateManyUpdatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
