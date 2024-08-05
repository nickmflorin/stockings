/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereInputObjectSchema } from './ProductRecordWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordListRelationFilter>;
export const ProductRecordListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => ProductRecordWhereInputObjectSchema).optional(), some: z.lazy(() => ProductRecordWhereInputObjectSchema).optional(), none: z.lazy(() => ProductRecordWhereInputObjectSchema).optional()
}).strict() as SchemaType;
