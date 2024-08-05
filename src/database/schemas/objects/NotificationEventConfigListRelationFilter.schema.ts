/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigWhereInputObjectSchema } from './NotificationEventConfigWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigListRelationFilter>;
export const NotificationEventConfigListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => NotificationEventConfigWhereInputObjectSchema).optional(), some: z.lazy(() => NotificationEventConfigWhereInputObjectSchema).optional(), none: z.lazy(() => NotificationEventConfigWhereInputObjectSchema).optional()
}).strict() as SchemaType;
