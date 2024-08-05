/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataSumAggregateInputType>;
export const HttpClientErrorDataSumAggregateInputObjectSchema: SchemaType = z.object({
    status: z.literal(true).optional()
}).strict() as SchemaType;
