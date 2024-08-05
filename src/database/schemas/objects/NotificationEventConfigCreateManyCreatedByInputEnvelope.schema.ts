/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigCreateManyCreatedByInputObjectSchema } from './NotificationEventConfigCreateManyCreatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateManyCreatedByInputEnvelope>;
export const NotificationEventConfigCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => NotificationEventConfigCreateManyCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateManyCreatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
