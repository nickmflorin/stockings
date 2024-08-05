/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NonUniqueElementErrorDataUncheckedCreateInput>;
export const NonUniqueElementErrorDataUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), parentHtml: z.union([z.string(),
    z.null()]).optional().nullable(), selector: z.string()
}).strict() as SchemaType;
