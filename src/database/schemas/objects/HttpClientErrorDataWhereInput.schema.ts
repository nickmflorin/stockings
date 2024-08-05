/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataWhereInput>;
export const HttpClientErrorDataWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => HttpClientErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpClientErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => HttpClientErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => HttpClientErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpClientErrorDataWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), url: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), status: z.union([z.lazy(() => IntFilterObjectSchema),
    z.number()]).optional()
}).strict() as SchemaType;
