/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HttpSerializationErrorDataCountOrderByAggregateInputObjectSchema } from './HttpSerializationErrorDataCountOrderByAggregateInput.schema';
import { HttpSerializationErrorDataMaxOrderByAggregateInputObjectSchema } from './HttpSerializationErrorDataMaxOrderByAggregateInput.schema';
import { HttpSerializationErrorDataMinOrderByAggregateInputObjectSchema } from './HttpSerializationErrorDataMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpSerializationErrorDataOrderByWithAggregationInput>;
export const HttpSerializationErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), url: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => HttpSerializationErrorDataCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => HttpSerializationErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => HttpSerializationErrorDataMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
