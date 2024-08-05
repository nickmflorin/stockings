/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataUncheckedCreateInput>;
export const HttpClientErrorDataUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), url: z.string(), status: z.number()
}).strict() as SchemaType;
