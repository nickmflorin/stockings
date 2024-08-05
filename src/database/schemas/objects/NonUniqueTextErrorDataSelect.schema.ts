/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NonUniqueTextErrorDataSelect>;
export const NonUniqueTextErrorDataSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), parentHtml: z.boolean().optional()
}).strict() as SchemaType;
