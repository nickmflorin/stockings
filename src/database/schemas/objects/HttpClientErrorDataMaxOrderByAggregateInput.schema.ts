/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataMaxOrderByAggregateInput>;
export const HttpClientErrorDataMaxOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), url: z.lazy(() => SortOrderSchema).optional(), status: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
