/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventOrderByWithRelationInput>;
export const NotificationEventOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), createdById: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), updatedById: z.lazy(() => SortOrderSchema).optional(), productId: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), contentType: z.lazy(() => SortOrderSchema).optional(), createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), updatedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(), product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional(), user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict() as SchemaType;
