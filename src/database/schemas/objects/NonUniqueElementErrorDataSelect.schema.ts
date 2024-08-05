/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NonUniqueElementErrorDataSelect>;
export const NonUniqueElementErrorDataSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), parentHtml: z.boolean().optional(), selector: z.boolean().optional()
}).strict() as SchemaType;
