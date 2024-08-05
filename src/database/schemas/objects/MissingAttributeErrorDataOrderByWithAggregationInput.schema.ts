/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MissingAttributeErrorDataCountOrderByAggregateInputObjectSchema } from './MissingAttributeErrorDataCountOrderByAggregateInput.schema';
import { MissingAttributeErrorDataMaxOrderByAggregateInputObjectSchema } from './MissingAttributeErrorDataMaxOrderByAggregateInput.schema';
import { MissingAttributeErrorDataMinOrderByAggregateInputObjectSchema } from './MissingAttributeErrorDataMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataOrderByWithAggregationInput>;
export const MissingAttributeErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), attribute: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), _count: z.lazy(() => MissingAttributeErrorDataCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => MissingAttributeErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => MissingAttributeErrorDataMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
