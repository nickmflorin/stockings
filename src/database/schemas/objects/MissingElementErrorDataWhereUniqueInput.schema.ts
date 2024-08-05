/* eslint-disable */
import { z } from 'zod';
import { MissingElementErrorDataWhereInputObjectSchema } from './MissingElementErrorDataWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingElementErrorDataWhereUniqueInput>;
export const MissingElementErrorDataWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => MissingElementErrorDataWhereInputObjectSchema),
    z.lazy(() => MissingElementErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => MissingElementErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => MissingElementErrorDataWhereInputObjectSchema),
    z.lazy(() => MissingElementErrorDataWhereInputObjectSchema).array()]).optional(), parentHtml: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), selector: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
