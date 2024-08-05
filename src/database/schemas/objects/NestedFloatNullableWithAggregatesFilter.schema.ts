/* eslint-disable */
import { z } from 'zod';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter>;
export const NestedFloatNullableWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.number(),
    z.null()]).optional().nullable(), in: z.union([z.number().array(),
    z.null()]).optional().nullable(), notIn: z.union([z.number().array(),
    z.null()]).optional().nullable(), lt: z.number().optional(), lte: z.number().optional(), gt: z.number().optional(), gte: z.number().optional(), not: z.union([z.number(),
    z.lazy(() => NestedFloatNullableWithAggregatesFilterObjectSchema),
    z.null()]).optional().nullable(), _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(), _avg: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(), _sum: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(), _min: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(), _max: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional()
}).strict() as SchemaType;
