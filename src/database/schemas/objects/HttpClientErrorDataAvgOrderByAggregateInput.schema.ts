/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataAvgOrderByAggregateInput>;
export const HttpClientErrorDataAvgOrderByAggregateInputObjectSchema: SchemaType = z.object({
    status: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
