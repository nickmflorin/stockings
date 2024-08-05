/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.MissingElementErrorDataMinAggregateInputType>;
export const MissingElementErrorDataMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), parentHtml: z.literal(true).optional(), selector: z.literal(true).optional()
}).strict() as SchemaType;
