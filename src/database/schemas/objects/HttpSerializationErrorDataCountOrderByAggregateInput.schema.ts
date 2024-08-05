/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpSerializationErrorDataCountOrderByAggregateInput>;
export const HttpSerializationErrorDataCountOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), url: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
