/* eslint-disable */
import { z } from 'zod';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NestedBoolWithAggregatesFilter>;
export const NestedBoolWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.boolean().optional(), not: z.union([z.boolean(),
    z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(), _max: z.lazy(() => NestedBoolFilterObjectSchema).optional()
}).strict() as SchemaType;
