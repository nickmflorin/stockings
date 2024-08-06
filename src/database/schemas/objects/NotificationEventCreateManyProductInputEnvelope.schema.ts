/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateManyProductInputObjectSchema } from './NotificationEventCreateManyProductInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateManyProductInputEnvelope>;
export const NotificationEventCreateManyProductInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => NotificationEventCreateManyProductInputObjectSchema),
    z.lazy(() => NotificationEventCreateManyProductInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
