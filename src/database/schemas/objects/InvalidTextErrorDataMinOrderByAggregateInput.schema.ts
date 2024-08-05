/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.InvalidTextErrorDataMinOrderByAggregateInput>;
export const InvalidTextErrorDataMinOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.lazy(() => SortOrderSchema).optional(), value: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
