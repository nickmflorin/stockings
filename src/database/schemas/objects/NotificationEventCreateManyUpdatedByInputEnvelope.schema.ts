/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateManyUpdatedByInputObjectSchema } from './NotificationEventCreateManyUpdatedByInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateManyUpdatedByInputEnvelope>;
export const NotificationEventCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => NotificationEventCreateManyUpdatedByInputObjectSchema),
    z.lazy(() => NotificationEventCreateManyUpdatedByInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
