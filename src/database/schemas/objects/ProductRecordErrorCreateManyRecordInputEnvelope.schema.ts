/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorCreateManyRecordInputObjectSchema } from './ProductRecordErrorCreateManyRecordInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorCreateManyRecordInputEnvelope>;
export const ProductRecordErrorCreateManyRecordInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ProductRecordErrorCreateManyRecordInputObjectSchema),
    z.lazy(() => ProductRecordErrorCreateManyRecordInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
