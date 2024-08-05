/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UserMinOrderByAggregateInput>;
export const UserMinOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), clerkId: z.lazy(() => SortOrderSchema).optional(), firstName: z.lazy(() => SortOrderSchema).optional(), lastName: z.lazy(() => SortOrderSchema).optional(), profileImageUrl: z.lazy(() => SortOrderSchema).optional(), emailAddress: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
