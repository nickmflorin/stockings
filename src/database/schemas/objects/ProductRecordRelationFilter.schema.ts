/* eslint-disable */
import { z } from 'zod';
import { ProductRecordWhereInputObjectSchema } from './ProductRecordWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRecordRelationFilter>;
export const ProductRecordRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => ProductRecordWhereInputObjectSchema).optional(), isNot: z.lazy(() => ProductRecordWhereInputObjectSchema).optional()
}).strict() as SchemaType;
