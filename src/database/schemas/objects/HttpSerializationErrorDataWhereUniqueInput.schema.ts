/* eslint-disable */
import { z } from 'zod';
import { HttpSerializationErrorDataWhereInputObjectSchema } from './HttpSerializationErrorDataWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpSerializationErrorDataWhereUniqueInput>;
export const HttpSerializationErrorDataWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpSerializationErrorDataWhereInputObjectSchema).array()]).optional(), url: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
