/* eslint-disable */
import { z } from 'zod';
import { ProductCreateManyUpdatedByInputObjectSchema } from './ProductCreateManyUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductCreateManyUpdatedByInputEnvelope>;
export const ProductCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductCreateManyUpdatedByInputObjectSchema),
    z.lazy(() => ProductCreateManyUpdatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
