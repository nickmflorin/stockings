/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NonUniqueElementErrorDataWhereInput>;
export const NonUniqueElementErrorDataWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema),
    z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema),
    z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), selector: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
