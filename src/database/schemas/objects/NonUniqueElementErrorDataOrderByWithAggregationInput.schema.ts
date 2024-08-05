/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NonUniqueElementErrorDataCountOrderByAggregateInputObjectSchema } from './NonUniqueElementErrorDataCountOrderByAggregateInput.schema';
import { NonUniqueElementErrorDataMaxOrderByAggregateInputObjectSchema } from './NonUniqueElementErrorDataMaxOrderByAggregateInput.schema';
import { NonUniqueElementErrorDataMinOrderByAggregateInputObjectSchema } from './NonUniqueElementErrorDataMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NonUniqueElementErrorDataOrderByWithAggregationInput>;
export const NonUniqueElementErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), selector: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => NonUniqueElementErrorDataCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => NonUniqueElementErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => NonUniqueElementErrorDataMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
