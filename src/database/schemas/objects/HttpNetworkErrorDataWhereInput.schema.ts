/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpNetworkErrorDataWhereInput>;
export const HttpNetworkErrorDataWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpNetworkErrorDataWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), url: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
