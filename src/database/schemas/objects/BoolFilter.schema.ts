/* eslint-disable */
import { z } from 'zod';
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.BoolFilter>;
export const BoolFilterObjectSchema: SchemaType = z.object({
    equals: z.boolean().optional(), not: z.union([z.boolean(),
    z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict() as SchemaType;
