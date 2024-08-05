/* eslint-disable */
import { z } from 'zod';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';
import { NestedEnumElementAttributeFilterObjectSchema } from './NestedEnumElementAttributeFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumElementAttributeFilter>;
export const EnumElementAttributeFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ElementAttributeSchema).optional(), in: z.lazy(() => ElementAttributeSchema).array().optional(), notIn: z.lazy(() => ElementAttributeSchema).array().optional(), not: z.union([z.lazy(() => ElementAttributeSchema),
    z.lazy(() => NestedEnumElementAttributeFilterObjectSchema)]).optional()
}).strict() as SchemaType;
