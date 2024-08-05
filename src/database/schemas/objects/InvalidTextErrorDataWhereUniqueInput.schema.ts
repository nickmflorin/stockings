/* eslint-disable */
import { z } from 'zod';
import { InvalidTextErrorDataWhereInputObjectSchema } from './InvalidTextErrorDataWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.InvalidTextErrorDataWhereUniqueInput>;
export const InvalidTextErrorDataWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema),
    z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema),
    z.lazy(() => InvalidTextErrorDataWhereInputObjectSchema).array()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), value: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
