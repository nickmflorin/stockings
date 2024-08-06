/* eslint-disable */
import { z } from 'zod';
import { NotificationEventWhereInputObjectSchema } from './NotificationEventWhereInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventListRelationFilter>;
export const NotificationEventListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => NotificationEventWhereInputObjectSchema).optional(), some: z.lazy(() => NotificationEventWhereInputObjectSchema).optional(), none: z.lazy(() => NotificationEventWhereInputObjectSchema).optional()
}).strict() as SchemaType;
