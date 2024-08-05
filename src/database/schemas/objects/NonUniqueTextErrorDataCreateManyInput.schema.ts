/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NonUniqueTextErrorDataCreateManyInput>;
export const NonUniqueTextErrorDataCreateManyInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), parentHtml: z.union([z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
