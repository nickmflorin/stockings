/* eslint-disable */
import { z } from 'zod';
import { NotificationEventConfigCreateManyUpdatedByInputObjectSchema } from './NotificationEventConfigCreateManyUpdatedByInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NotificationEventConfigCreateManyUpdatedByInputEnvelope>;
export const NotificationEventConfigCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => NotificationEventConfigCreateManyUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventConfigCreateManyUpdatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
