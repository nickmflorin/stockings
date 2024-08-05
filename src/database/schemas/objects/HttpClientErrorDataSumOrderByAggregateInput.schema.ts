/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataSumOrderByAggregateInput>;
export const HttpClientErrorDataSumOrderByAggregateInputObjectSchema: SchemaType = z.object({
    status: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
