/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PriceChangeEventConfigCountOrderByAggregateInputObjectSchema } from './PriceChangeEventConfigCountOrderByAggregateInput.schema';
import { PriceChangeEventConfigMaxOrderByAggregateInputObjectSchema } from './PriceChangeEventConfigMaxOrderByAggregateInput.schema';
import { PriceChangeEventConfigMinOrderByAggregateInputObjectSchema } from './PriceChangeEventConfigMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigOrderByWithAggregationInput>;
export const PriceChangeEventConfigOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productNotificationConfigId: z.lazy(() => SortOrderSchema).optional(), contentType: z.lazy(() => SortOrderSchema).optional(), eventTypes: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => PriceChangeEventConfigCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => PriceChangeEventConfigMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => PriceChangeEventConfigMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
