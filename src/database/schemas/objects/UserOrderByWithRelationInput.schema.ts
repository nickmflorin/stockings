/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';
import { ProductRecordOrderByRelationAggregateInputObjectSchema } from './ProductRecordOrderByRelationAggregateInput.schema';
import { ProductNotificationConfigOrderByRelationAggregateInputObjectSchema } from './ProductNotificationConfigOrderByRelationAggregateInput.schema';
import { NotificationEventConfigOrderByRelationAggregateInputObjectSchema } from './NotificationEventConfigOrderByRelationAggregateInput.schema';
import { PriceChangeEventConfigOrderByRelationAggregateInputObjectSchema } from './PriceChangeEventConfigOrderByRelationAggregateInput.schema';
import { StatusChangeEventConfigOrderByRelationAggregateInputObjectSchema } from './StatusChangeEventConfigOrderByRelationAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), clerkId: z.lazy(() => SortOrderSchema).optional(), firstName: z.lazy(() => SortOrderSchema).optional(), lastName: z.lazy(() => SortOrderSchema).optional(), profileImageUrl: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), emailAddress: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), createdProducts: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional(), updatedProducts: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordOrderByRelationAggregateInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordOrderByRelationAggregateInputObjectSchema).optional(), productNotificationConfigs: z.lazy(() => ProductNotificationConfigOrderByRelationAggregateInputObjectSchema).optional(), createdProductNotificationConfigs: z.lazy(() => ProductNotificationConfigOrderByRelationAggregateInputObjectSchema).optional(), updatedProductNotificationConfigs: z.lazy(() => ProductNotificationConfigOrderByRelationAggregateInputObjectSchema).optional(), createdNotificationEventConfigs: z.lazy(() => NotificationEventConfigOrderByRelationAggregateInputObjectSchema).optional(), updatedNotificationEventConfigs: z.lazy(() => NotificationEventConfigOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_createdNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_P_0: z.lazy(() => PriceChangeEventConfigOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEventConfigs_S_0: z.lazy(() => StatusChangeEventConfigOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
