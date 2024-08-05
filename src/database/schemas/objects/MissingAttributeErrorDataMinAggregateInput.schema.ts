/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataMinAggregateInputType>;
export const MissingAttributeErrorDataMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), attribute: z.literal(true).optional(), parentHtml: z.literal(true).optional()
}).strict() as SchemaType;
