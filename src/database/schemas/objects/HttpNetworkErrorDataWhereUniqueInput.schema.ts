/* eslint-disable */
import { z } from 'zod';
import { HttpNetworkErrorDataWhereInputObjectSchema } from './HttpNetworkErrorDataWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpNetworkErrorDataWhereUniqueInput>;
export const HttpNetworkErrorDataWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema).array()]).optional(), url: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
