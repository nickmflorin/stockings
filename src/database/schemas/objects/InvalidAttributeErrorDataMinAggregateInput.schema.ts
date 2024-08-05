/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.InvalidAttributeErrorDataMinAggregateInputType>;
export const InvalidAttributeErrorDataMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), attribute: z.literal(true).optional(), parentHtml: z.literal(true).optional(), value: z.literal(true).optional()
}).strict() as SchemaType;
