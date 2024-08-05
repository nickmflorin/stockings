/* eslint-disable */
import { z } from 'zod';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductListRelationFilter>;
export const ProductListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => ProductWhereInputObjectSchema).optional(), some: z.lazy(() => ProductWhereInputObjectSchema).optional(), none: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict() as SchemaType;
