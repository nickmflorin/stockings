/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NotificationEventConfigCountOrderByAggregateInputObjectSchema } from './NotificationEventConfigCountOrderByAggregateInput.schema';
import { NotificationEventConfigMaxOrderByAggregateInputObjectSchema } from './NotificationEventConfigMaxOrderByAggregateInput.schema';
import { NotificationEventConfigMinOrderByAggregateInputObjectSchema } from './NotificationEventConfigMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigOrderByWithAggregationInput>;
export const NotificationEventConfigOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productNotificationConfigId: z.lazy(() => SortOrderSchema).optional(), contentType: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => NotificationEventConfigCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => NotificationEventConfigMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => NotificationEventConfigMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
