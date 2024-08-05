/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HttpNetworkErrorDataCountOrderByAggregateInputObjectSchema } from './HttpNetworkErrorDataCountOrderByAggregateInput.schema';
import { HttpNetworkErrorDataMaxOrderByAggregateInputObjectSchema } from './HttpNetworkErrorDataMaxOrderByAggregateInput.schema';
import { HttpNetworkErrorDataMinOrderByAggregateInputObjectSchema } from './HttpNetworkErrorDataMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpNetworkErrorDataOrderByWithAggregationInput>;
export const HttpNetworkErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), url: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => HttpNetworkErrorDataCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => HttpNetworkErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => HttpNetworkErrorDataMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
