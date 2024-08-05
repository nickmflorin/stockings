/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCountAggregateInputType>;
export const NotificationEventConfigCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), createdAt: z.literal(true).optional(), createdById: z.literal(true).optional(), updatedAt: z.literal(true).optional(), updatedById: z.literal(true).optional(), productNotificationConfigId: z.literal(true).optional(), contentType: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
