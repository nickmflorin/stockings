/* eslint-disable */
import { z } from 'zod';
import { ProductNotificationConfigCreateManyCreatedByInputObjectSchema } from './ProductNotificationConfigCreateManyCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigCreateManyCreatedByInputEnvelope>;
export const ProductNotificationConfigCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductNotificationConfigCreateManyCreatedByInputObjectSchema),
    z.lazy(() => ProductNotificationConfigCreateManyCreatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
