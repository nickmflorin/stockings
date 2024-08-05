/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NonUniqueTextErrorDataCountOrderByAggregateInputObjectSchema } from './NonUniqueTextErrorDataCountOrderByAggregateInput.schema';
import { NonUniqueTextErrorDataMaxOrderByAggregateInputObjectSchema } from './NonUniqueTextErrorDataMaxOrderByAggregateInput.schema';
import { NonUniqueTextErrorDataMinOrderByAggregateInputObjectSchema } from './NonUniqueTextErrorDataMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NonUniqueTextErrorDataOrderByWithAggregationInput>;
export const NonUniqueTextErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), _count: z.lazy(() => NonUniqueTextErrorDataCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => NonUniqueTextErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => NonUniqueTextErrorDataMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
