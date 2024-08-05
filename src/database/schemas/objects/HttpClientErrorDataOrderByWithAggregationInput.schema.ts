/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HttpClientErrorDataCountOrderByAggregateInputObjectSchema } from './HttpClientErrorDataCountOrderByAggregateInput.schema';
import { HttpClientErrorDataAvgOrderByAggregateInputObjectSchema } from './HttpClientErrorDataAvgOrderByAggregateInput.schema';
import { HttpClientErrorDataMaxOrderByAggregateInputObjectSchema } from './HttpClientErrorDataMaxOrderByAggregateInput.schema';
import { HttpClientErrorDataMinOrderByAggregateInputObjectSchema } from './HttpClientErrorDataMinOrderByAggregateInput.schema';
import { HttpClientErrorDataSumOrderByAggregateInputObjectSchema } from './HttpClientErrorDataSumOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataOrderByWithAggregationInput>;
export const HttpClientErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), url: z.lazy(() => SortOrderSchema).optional(), status: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => HttpClientErrorDataCountOrderByAggregateInputObjectSchema).optional(), _avg: z.lazy(() => HttpClientErrorDataAvgOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => HttpClientErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => HttpClientErrorDataMinOrderByAggregateInputObjectSchema).optional(), _sum: z.lazy(() => HttpClientErrorDataSumOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
