/* eslint-disable */
import { z } from 'zod';
import { NonUniqueElementErrorDataWhereInputObjectSchema } from './NonUniqueElementErrorDataWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NonUniqueElementErrorDataWhereUniqueInput>;
export const NonUniqueElementErrorDataWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema),
    z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema),
    z.lazy(() => NonUniqueElementErrorDataWhereInputObjectSchema).array()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), selector: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
