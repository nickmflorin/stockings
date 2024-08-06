/* eslint-disable */
import { z } from 'zod';
import { NotificationEventCreateManyUserInputObjectSchema } from './NotificationEventCreateManyUserInput.schema';

import type { Prisma } from '../../../../generated/models';

type SchemaType = z.ZodType<Prisma.NotificationEventCreateManyUserInputEnvelope>;
export const NotificationEventCreateManyUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => NotificationEventCreateManyUserInputObjectSchema),
    z.lazy(() => NotificationEventCreateManyUserInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
