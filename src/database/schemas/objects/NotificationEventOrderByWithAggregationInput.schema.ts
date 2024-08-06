/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NotificationEventCountOrderByAggregateInputObjectSchema } from './NotificationEventCountOrderByAggregateInput.schema';
import { NotificationEventMaxOrderByAggregateInputObjectSchema } from './NotificationEventMaxOrderByAggregateInput.schema';
import { NotificationEventMinOrderByAggregateInputObjectSchema } from './NotificationEventMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventOrderByWithAggregationInput>;
export const NotificationEventOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productId: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), contentType: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => NotificationEventCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => NotificationEventMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => NotificationEventMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
