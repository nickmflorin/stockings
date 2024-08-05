/* eslint-disable */
import { z } from 'zod';
import { NonUniqueTextErrorDataWhereInputObjectSchema } from './NonUniqueTextErrorDataWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NonUniqueTextErrorDataWhereUniqueInput>;
export const NonUniqueTextErrorDataWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema),
    z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema),
    z.lazy(() => NonUniqueTextErrorDataWhereInputObjectSchema).array()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
