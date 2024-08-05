/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereInputObjectSchema } from './ProductRecordWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductRecordRelationFilter>;
export const ProductRecordRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => ProductRecordWhereInputObjectSchema).optional(), isNot: z.lazy(() => ProductRecordWhereInputObjectSchema).optional()
}).strict() as SchemaType;
