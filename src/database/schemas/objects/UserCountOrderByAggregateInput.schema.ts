/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.UserCountOrderByAggregateInput>;
export const UserCountOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), clerkId: z.lazy(() => SortOrderSchema).optional(), firstName: z.lazy(() => SortOrderSchema).optional(), lastName: z.lazy(() => SortOrderSchema).optional(), profileImageUrl: z.lazy(() => SortOrderSchema).optional(), emailAddress: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
