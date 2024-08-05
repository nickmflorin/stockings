/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NonUniqueTextErrorDataWhereInput>;
export const NonUniqueTextErrorDataWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema),
    z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema),
    z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
