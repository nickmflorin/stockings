/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpNetworkErrorDataSelect>;
export const HttpNetworkErrorDataSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), url: z.boolean().optional()
}).strict() as SchemaType;
