/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
import { NotificationEventConfigOrderByRelationAggregateInputObjectSchema } from './NotificationEventConfigOrderByRelationAggregateInput.schema';
import { PriceChangeEventConfigOrderByRelationAggregateInputObjectSchema } from './PriceChangeEventConfigOrderByRelationAggregateInput.schema';
import { StatusChangeEventConfigOrderByRelationAggregateInputObjectSchema } from './StatusChangeEventConfigOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductNotificationConfigOrderByWithRelationInput>;
export const ProductNotificationConfigOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productId: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional(), user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), eventConfigs: z.lazy(() => NotificationEventConfigOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_0: z.lazy(() => PriceChangeEventConfigOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_ProductNotificationConfig_eventConfigs_1: z.lazy(() => StatusChangeEventConfigOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
