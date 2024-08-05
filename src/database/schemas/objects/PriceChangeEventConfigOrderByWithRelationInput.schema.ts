/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductNotificationConfigOrderByWithRelationInputObjectSchema } from './ProductNotificationConfigOrderByWithRelationInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PriceChangeEventConfigOrderByWithRelationInput>;
export const PriceChangeEventConfigOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productNotificationConfigId: z.lazy(() => SortOrderSchema).optional(), contentType: z.lazy(() => SortOrderSchema).optional(), eventTypes: z.lazy(() => SortOrderSchema).optional(), createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), productNotificationConfig: z.lazy(() => ProductNotificationConfigOrderByWithRelationInputObjectSchema).optional()
}).strict() as SchemaType;
