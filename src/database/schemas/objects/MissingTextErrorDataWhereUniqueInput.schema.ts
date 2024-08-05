/* eslint-disable */
import { z } from 'zod';
import { MissingTextErrorDataWhereInputObjectSchema } from './MissingTextErrorDataWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingTextErrorDataWhereUniqueInput>;
export const MissingTextErrorDataWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => MissingTextErrorDataWhereInputObjectSchema),
    z.lazy(() => MissingTextErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => MissingTextErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => MissingTextErrorDataWhereInputObjectSchema),
    z.lazy(() => MissingTextErrorDataWhereInputObjectSchema).array()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
