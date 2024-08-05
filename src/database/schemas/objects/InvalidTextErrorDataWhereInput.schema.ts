/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.InvalidTextErrorDataWhereInput>;
export const InvalidTextErrorDataWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema),
    z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema),
    z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), value: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
