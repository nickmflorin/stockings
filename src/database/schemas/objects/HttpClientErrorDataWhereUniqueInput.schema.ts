/* eslint-disable */
import { z } from 'zod';
import { HttpClientErrorDataWhereInputObjectSchema } from './HttpClientErrorDataWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.HttpClientErrorDataWhereUniqueInput>;
export const HttpClientErrorDataWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => HttpClientErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpClientErrorDataWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => HttpClientErrorDataWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => HttpClientErrorDataWhereInputObjectSchema),
    z.lazy(() => HttpClientErrorDataWhereInputObjectSchema).array()]).optional(), url: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), status: z.union([z.lazy(() => IntFilterObjectSchema),
    z.number()]).optional()
}).strict() as SchemaType;
