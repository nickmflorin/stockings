/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductNotificationConfigCountOrderByAggregateInputObjectSchema } from './ProductNotificationConfigCountOrderByAggregateInput.schema';
import { ProductNotificationConfigMaxOrderByAggregateInputObjectSchema } from './ProductNotificationConfigMaxOrderByAggregateInput.schema';
import { ProductNotificationConfigMinOrderByAggregateInputObjectSchema } from './ProductNotificationConfigMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigOrderByWithAggregationInput>;
export const ProductNotificationConfigOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productId: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => ProductNotificationConfigCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => ProductNotificationConfigMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => ProductNotificationConfigMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
