/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput>;
export const NullableFloatFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.union([z.number(),
    z.null()]).optional().nullable(), increment: z.number().optional(), decrement: z.number().optional(), multiply: z.number().optional(), divide: z.number().optional()
}).strict() as SchemaType;
