/* eslint-disable */
import { z } from 'zod';
import { StatusChangeEventWhereInputObjectSchema } from './StatusChangeEventWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.StatusChangeEventListRelationFilter>;
export const StatusChangeEventListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => StatusChangeEventWhereInputObjectSchema).optional(), some: z.lazy(() => StatusChangeEventWhereInputObjectSchema).optional(), none: z.lazy(() => StatusChangeEventWhereInputObjectSchema).optional()
}).strict() as SchemaType;
