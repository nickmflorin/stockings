/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpNetworkErrorDataUncheckedCreateInput>;
export const HttpNetworkErrorDataUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), url: z.string()
}).strict() as SchemaType;
