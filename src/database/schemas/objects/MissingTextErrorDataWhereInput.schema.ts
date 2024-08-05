/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingTextErrorDataWhereInput>;
export const MissingTextErrorDataWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => MissingTextErrorDataWhereInputObjectSchema),
    z.lazy(() => MissingTextErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => MissingTextErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => MissingTextErrorDataWhereInputObjectSchema),
    z.lazy(() => MissingTextErrorDataWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
