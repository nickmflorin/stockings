/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpSerializationErrorDataUncheckedCreateInput>;
export const HttpSerializationErrorDataUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), url: z.string()
}).strict() as SchemaType;
