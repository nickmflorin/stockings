/* eslint-disable */
import { z } from 'zod';
import { ProductCreateManyCreatedByInputObjectSchema } from './ProductCreateManyCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductCreateManyCreatedByInputEnvelope>;
export const ProductCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductCreateManyCreatedByInputObjectSchema),
    z.lazy(() => ProductCreateManyCreatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
