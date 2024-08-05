/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateManyUpdatedByInputObjectSchema } from './ProductRecordCreateManyUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateManyUpdatedByInputEnvelope>;
export const ProductRecordCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductRecordCreateManyUpdatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateManyUpdatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
