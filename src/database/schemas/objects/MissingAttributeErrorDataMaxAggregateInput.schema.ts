/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingAttributeErrorDataMaxAggregateInputType>;
export const MissingAttributeErrorDataMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), attribute: z.literal(true).optional(), parentHtml: z.literal(true).optional()
}).strict() as SchemaType;
