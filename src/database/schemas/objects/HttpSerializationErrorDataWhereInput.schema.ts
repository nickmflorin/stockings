/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpSerializationErrorDataWhereInput>;
export const HttpSerializationErrorDataWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), url: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
