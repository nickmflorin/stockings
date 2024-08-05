/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateManyCreatedByInputObjectSchema } from './ProductRecordCreateManyCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateManyCreatedByInputEnvelope>;
export const ProductRecordCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductRecordCreateManyCreatedByInputObjectSchema),
    z.lazy(() => ProductRecordCreateManyCreatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
