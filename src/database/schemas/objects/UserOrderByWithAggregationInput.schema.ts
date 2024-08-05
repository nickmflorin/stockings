/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserOrderByWithAggregationInput>;
export const UserOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), clerkId: z.lazy(() => SortOrderSchema).optional(), firstName: z.lazy(() => SortOrderSchema).optional(), lastName: z.lazy(() => SortOrderSchema).optional(), profileImageUrl: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), emailAddress: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
