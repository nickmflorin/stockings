/* eslint-disable */
import { z } from 'zod';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
import { NestedEnumElementAttributeWithAggregatesFilterObjectSchema } from './NestedEnumElementAttributeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumElementAttributeFilterObjectSchema } from './NestedEnumElementAttributeFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumElementAttributeWithAggregatesFilter>;
export const EnumElementAttributeWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ElementAttributeSchema).optional(), in: z.lazy(() => ElementAttributeSchema).array().optional(), notIn: z.lazy(() => ElementAttributeSchema).array().optional(), not: z.union([z.lazy(() => ElementAttributeSchema),
    z.lazy(() => NestedEnumElementAttributeWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumElementAttributeFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumElementAttributeFilterObjectSchema).optional()
}).strict() as SchemaType;
