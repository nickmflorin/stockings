/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductRecordOrderByRelationAggregateInputObjectSchema } from './ProductRecordOrderByRelationAggregateInput.schema';
import { ProductNotificationConfigOrderByRelationAggregateInputObjectSchema } from './ProductNotificationConfigOrderByRelationAggregateInput.schema';

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
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), category: z.lazy(() => SortOrderSchema).optional(), subCategories: z.lazy(() => SortOrderSchema).optional(), createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), records: z.lazy(() => ProductRecordOrderByRelationAggregateInputObjectSchema).optional(), notificationConfigs: z.lazy(() => ProductNotificationConfigOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
