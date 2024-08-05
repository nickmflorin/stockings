/* eslint-disable */
import { z } from 'zod';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumElementAttributeFilterObjectSchema } from './NestedEnumElementAttributeFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NestedEnumElementAttributeWithAggregatesFilter>;
export const NestedEnumElementAttributeWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ElementAttributeSchema).optional(), in: z.lazy(() => ElementAttributeSchema).array().optional(), notIn: z.lazy(() => ElementAttributeSchema).array().optional(), not: z.union([z.lazy(() => ElementAttributeSchema),
    z.lazy(() => NestedEnumElementAttributeWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedEnumElementAttributeFilterObjectSchema).optional(), _max: z.lazy(() => NestedEnumElementAttributeFilterObjectSchema).optional()
}).strict() as SchemaType;
