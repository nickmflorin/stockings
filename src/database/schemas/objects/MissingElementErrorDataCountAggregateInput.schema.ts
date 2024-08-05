/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.MissingElementErrorDataCountAggregateInputType>;
export const MissingElementErrorDataCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), parentHtml: z.literal(true).optional(), selector: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
