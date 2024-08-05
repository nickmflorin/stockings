/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MissingTextErrorDataCountOrderByAggregateInputObjectSchema } from './MissingTextErrorDataCountOrderByAggregateInput.schema';
import { MissingTextErrorDataMaxOrderByAggregateInputObjectSchema } from './MissingTextErrorDataMaxOrderByAggregateInput.schema';
import { MissingTextErrorDataMinOrderByAggregateInputObjectSchema } from './MissingTextErrorDataMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingTextErrorDataOrderByWithAggregationInput>;
export const MissingTextErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), _count: z.lazy(() => MissingTextErrorDataCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => MissingTextErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => MissingTextErrorDataMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
