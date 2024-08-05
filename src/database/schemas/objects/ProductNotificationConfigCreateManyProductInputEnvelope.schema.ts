/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateManyProductInputObjectSchema } from './ProductNotificationConfigCreateManyProductInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateManyProductInputEnvelope>;
export const ProductNotificationConfigCreateManyProductInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductNotificationConfigCreateManyProductInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateManyProductInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
