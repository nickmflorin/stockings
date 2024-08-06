/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';
import { ProductRecordOrderByRelationAggregateInputObjectSchema } from './ProductRecordOrderByRelationAggregateInput.schema';
import { NotificationEventOrderByRelationAggregateInputObjectSchema } from './NotificationEventOrderByRelationAggregateInput.schema';
import { PriceChangeEventCOrderByRelationAggregateInputObjectSchema } from './PriceChangeEventCOrderByRelationAggregateInput.schema';
import { StatusChangeEventOrderByRelationAggregateInputObjectSchema } from './StatusChangeEventOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), clerkId: z.lazy(() => SortOrderSchema).optional(), firstName: z.lazy(() => SortOrderSchema).optional(), lastName: z.lazy(() => SortOrderSchema).optional(), profileImageUrl: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), emailAddress: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), createdProducts: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional(), updatedProducts: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional(), createdProductRecords: z.lazy(() => ProductRecordOrderByRelationAggregateInputObjectSchema).optional(), updatedProductRecords: z.lazy(() => ProductRecordOrderByRelationAggregateInputObjectSchema).optional(), createdNotificationEvents: z.lazy(() => NotificationEventOrderByRelationAggregateInputObjectSchema).optional(), updatedNotificationEvents: z.lazy(() => NotificationEventOrderByRelationAggregateInputObjectSchema).optional(), notificationEvents: z.lazy(() => NotificationEventOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_createdNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_PriceCh_0: z.lazy(() => PriceChangeEventCOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_updatedNotificationEvents_StatusC_0: z.lazy(() => StatusChangeEventOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_notificationEvents_PriceChangeEve_0: z.lazy(() => PriceChangeEventCOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_User_notificationEvents_StatusChangeEv_0: z.lazy(() => StatusChangeEventOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
