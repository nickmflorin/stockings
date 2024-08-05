/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InvalidTextErrorDataCountOrderByAggregateInputObjectSchema } from './InvalidTextErrorDataCountOrderByAggregateInput.schema';
import { InvalidTextErrorDataMaxOrderByAggregateInputObjectSchema } from './InvalidTextErrorDataMaxOrderByAggregateInput.schema';
import { InvalidTextErrorDataMinOrderByAggregateInputObjectSchema } from './InvalidTextErrorDataMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.InvalidTextErrorDataOrderByWithAggregationInput>;
export const InvalidTextErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), value: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => InvalidTextErrorDataCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => InvalidTextErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => InvalidTextErrorDataMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
