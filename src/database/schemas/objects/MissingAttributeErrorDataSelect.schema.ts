/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataSelect>;
export const MissingAttributeErrorDataSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), attribute: z.boolean().optional(), parentHtml: z.boolean().optional()
}).strict() as SchemaType;
