/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput>;
export const DateTimeFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.union([z.date().optional(), z.string().datetime().optional()])
}).strict() as SchemaType;
