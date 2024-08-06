/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PriceChangeEventCCountOrderByAggregateInputObjectSchema } from './PriceChangeEventCCountOrderByAggregateInput.schema';
import { PriceChangeEventCMaxOrderByAggregateInputObjectSchema } from './PriceChangeEventCMaxOrderByAggregateInput.schema';
import { PriceChangeEventCMinOrderByAggregateInputObjectSchema } from './PriceChangeEventCMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventCOrderByWithAggregationInput>;
export const PriceChangeEventCOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productId: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), contentType: z.lazy(() => SortOrderSchema).optional(), eventTypes: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => PriceChangeEventCCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => PriceChangeEventCMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => PriceChangeEventCMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
