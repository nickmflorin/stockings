/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.InvalidTextErrorDataCreateInput>;
export const InvalidTextErrorDataCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), parentHtml: z.union([z.string(),
    z.null()]).optional().nullable(), value: z.string()
}).strict() as SchemaType;
