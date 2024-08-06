/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateManyCreatedByInputObjectSchema } from './NotificationEventCreateManyCreatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateManyCreatedByInputEnvelope>;
export const NotificationEventCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => NotificationEventCreateManyCreatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateManyCreatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
