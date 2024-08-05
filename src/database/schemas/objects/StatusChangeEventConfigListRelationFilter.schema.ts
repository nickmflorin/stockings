/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventConfigWhereInputObjectSchema } from './StatusChangeEventConfigWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventConfigListRelationFilter>;
export const StatusChangeEventConfigListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => StatusChangeEventConfigWhereInputObjectSchema).optional(), some: z.lazy(() => StatusChangeEventConfigWhereInputObjectSchema).optional(), none: z.lazy(() => StatusChangeEventConfigWhereInputObjectSchema).optional()
}).strict() as SchemaType;
