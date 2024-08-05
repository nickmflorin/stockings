/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataSelect>;
export const HttpClientErrorDataSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), url: z.boolean().optional(), status: z.boolean().optional()
}).strict() as SchemaType;
