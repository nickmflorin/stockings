/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ProductAvgOrderByAggregateInput>;
export const ProductAvgOrderByAggregateInputObjectSchema: SchemaType = z.object({
    price: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
