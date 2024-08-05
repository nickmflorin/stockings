/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InvalidAttributeErrorDataCountOrderByAggregateInputObjectSchema } from './InvalidAttributeErrorDataCountOrderByAggregateInput.schema';
import { InvalidAttributeErrorDataMaxOrderByAggregateInputObjectSchema } from './InvalidAttributeErrorDataMaxOrderByAggregateInput.schema';
import { InvalidAttributeErrorDataMinOrderByAggregateInputObjectSchema } from './InvalidAttributeErrorDataMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.InvalidAttributeErrorDataOrderByWithAggregationInput>;
export const InvalidAttributeErrorDataOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), attribute: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), value: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => InvalidAttributeErrorDataCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => InvalidAttributeErrorDataMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => InvalidAttributeErrorDataMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
