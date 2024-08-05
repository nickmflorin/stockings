/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigCreateManyProductNotificationConfigInputObjectSchema } from './NotificationEventConfigCreateManyProductNotificationConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateManyProductNotificationConfigInputEnvelope>;
export const NotificationEventConfigCreateManyProductNotificationConfigInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => NotificationEventConfigCreateManyProductNotificationConfigInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateManyProductNotificationConfigInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
