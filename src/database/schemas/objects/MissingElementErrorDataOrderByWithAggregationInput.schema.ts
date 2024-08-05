/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MissingElementErrorDataCountOrderByAggregateInputObjectSchema } from './MissingElementErrorDataCountOrderByAggregateInput.schema';
import { MissingElementErrorDataMaxOrderByAggregateInputObjectSchema } from './MissingElementErrorDataMaxOrderByAggregateInput.schema';
import { MissingElementErrorDataMinOrderByAggregateInputObjectSchema } from './MissingElementErrorDataMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingElementErrorDataOrderByWithAggregationInput>;
export const MissingElementErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), selector: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => MissingElementErrorDataCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => MissingElementErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => MissingElementErrorDataMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
