/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.InvalidAttributeErrorDataCountOrderByAggregateInput>;
export const InvalidAttributeErrorDataCountOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), attribute: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.lazy(() => SortOrderSchema).optional(), value: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
