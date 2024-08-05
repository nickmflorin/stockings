/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingElementErrorDataMaxOrderByAggregateInput>;
export const MissingElementErrorDataMaxOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), parentHtml: z.lazy(() => SortOrderSchema).optional(), selector: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
