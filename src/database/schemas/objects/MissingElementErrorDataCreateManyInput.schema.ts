/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingElementErrorDataCreateManyInput>;
export const MissingElementErrorDataCreateManyInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), parentHtml: z.union([z.string(),
    z.null()]).optional().nullable(), selector: z.string()
}).strict() as SchemaType;
