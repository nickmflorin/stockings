/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductRecordOrderByRelationAggregateInputObjectSchema } from './ProductRecordOrderByRelationAggregateInput.schema';
import { NotificationEventOrderByRelationAggregateInputObjectSchema } from './NotificationEventOrderByRelationAggregateInput.schema';
import { PriceChangeEventCOrderByRelationAggregateInputObjectSchema } from './PriceChangeEventCOrderByRelationAggregateInput.schema';
import { StatusChangeEventOrderByRelationAggregateInputObjectSchema } from './StatusChangeEventOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.ProductOrderByWithRelationInput>;
export const ProductOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), name: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), slug: z.lazy(() => SortOrderSchema).optional(), code: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), imageSrc: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), status: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), statusRecordedAt: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), price: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), priceRecordedAt: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), category: z.lazy(() => SortOrderSchema).optional(), subCategories: z.lazy(() => SortOrderSchema).optional(), createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), records: z.lazy(() => ProductRecordOrderByRelationAggregateInputObjectSchema).optional(), notificationEvents: z.lazy(() => NotificationEventOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_Product_notificationEvents_PriceChange_0: z.lazy(() => PriceChangeEventCOrderByRelationAggregateInputObjectSchema).optional(), delegate_aux_Product_notificationEvents_StatusChang_0: z.lazy(() => StatusChangeEventOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
