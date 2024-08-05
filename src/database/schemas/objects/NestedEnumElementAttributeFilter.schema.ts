/* eslint-disable */
import { z } from 'zod';
import { ElementAttributeSchema } from '../enums/ElementAttribute.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NestedEnumElementAttributeFilter>;
export const NestedEnumElementAttributeFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => ElementAttributeSchema).optional(), in: z.lazy(() => ElementAttributeSchema).array().optional(), notIn: z.lazy(() => ElementAttributeSchema).array().optional(), not: z.union([z.lazy(() => ElementAttributeSchema),
    z.lazy(() => NestedEnumElementAttributeFilterObjectSchema)]).optional()
}).strict() as SchemaType;
