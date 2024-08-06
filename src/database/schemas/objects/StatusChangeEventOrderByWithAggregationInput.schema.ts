/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StatusChangeEventCountOrderByAggregateInputObjectSchema } from './StatusChangeEventCountOrderByAggregateInput.schema';
import { StatusChangeEventMaxOrderByAggregateInputObjectSchema } from './StatusChangeEventMaxOrderByAggregateInput.schema';
import { StatusChangeEventMinOrderByAggregateInputObjectSchema } from './StatusChangeEventMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventOrderByWithAggregationInput>;
export const StatusChangeEventOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productId: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), contentType: z.lazy(() => SortOrderSchema).optional(), eventTypes: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => StatusChangeEventCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => StatusChangeEventMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => StatusChangeEventMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
