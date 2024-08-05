/* eslint-disable */
import { z } from 'zod';
import { ProductRecordErrorWhereInputObjectSchema } from './ProductRecordErrorWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordErrorListRelationFilter>;
export const ProductRecordErrorListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => ProductRecordErrorWhereInputObjectSchema).optional(), some: z.lazy(() => ProductRecordErrorWhereInputObjectSchema).optional(), none: z.lazy(() => ProductRecordErrorWhereInputObjectSchema).optional()
}).strict() as SchemaType;
