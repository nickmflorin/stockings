/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataCreateManyInput>;
export const HttpClientErrorDataCreateManyInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), url: z.string(), status: z.number()
}).strict() as SchemaType;
