/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpNetworkErrorDataCreateManyInput>;
export const HttpNetworkErrorDataCreateManyInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), url: z.string()
}).strict() as SchemaType;
