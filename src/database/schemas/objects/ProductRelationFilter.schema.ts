/* eslint-disable */
import { z } from 'zod';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductRelationFilter>;
export const ProductRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => ProductWhereInputObjectSchema).optional(), isNot: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict() as SchemaType;
