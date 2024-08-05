/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpSerializationErrorDataCountAggregateInputType>;
export const HttpSerializationErrorDataCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), url: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
