/* eslint-disable */
import { z } from 'zod';
import { ProductRecordCreateManyProductInputObjectSchema } from './ProductRecordCreateManyProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordCreateManyProductInputEnvelope>;
export const ProductRecordCreateManyProductInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductRecordCreateManyProductInputObjectSchema),
    z.lazy(() => ProductRecordCreateManyProductInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
