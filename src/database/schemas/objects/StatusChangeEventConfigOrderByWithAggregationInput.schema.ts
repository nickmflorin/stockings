/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StatusChangeEventConfigCountOrderByAggregateInputObjectSchema } from './StatusChangeEventConfigCountOrderByAggregateInput.schema';
import { StatusChangeEventConfigMaxOrderByAggregateInputObjectSchema } from './StatusChangeEventConfigMaxOrderByAggregateInput.schema';
import { StatusChangeEventConfigMinOrderByAggregateInputObjectSchema } from './StatusChangeEventConfigMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigOrderByWithAggregationInput>;
export const StatusChangeEventConfigOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productNotificationConfigId: z.lazy(() => SortOrderSchema).optional(), contentType: z.lazy(() => SortOrderSchema).optional(), eventTypes: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => StatusChangeEventConfigCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => StatusChangeEventConfigMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => StatusChangeEventConfigMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
