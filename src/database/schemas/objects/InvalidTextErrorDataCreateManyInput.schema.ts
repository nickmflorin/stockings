/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.InvalidTextErrorDataCreateManyInput>;
export const InvalidTextErrorDataCreateManyInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), parentHtml: z.union([z.string(),
    z.null()]).optional().nullable(), value: z.string()
}).strict() as SchemaType;
